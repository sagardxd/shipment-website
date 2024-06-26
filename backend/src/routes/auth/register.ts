import express, { Request, Response } from 'express';
import { z } from 'zod'
import { sendOTP, verifyOTP, generateTokenUser } from '../../controllers/login';
import { phoneNumberSchema } from '../../zod/login';
import { userSchema } from '../../zod/register';
import User from '../../models/user'; // Import the User model


const router = express.Router();

//type inference
type userBody = z.infer<typeof userSchema>

router.post("/send-otp", async (req: Request, res: Response) => {
    const result = phoneNumberSchema.safeParse(req.body);
    const { phoneNumber } = req.body;

    if (!(result.success)) {
        return res.status(411).json({ msg: "Input errors", error: result.error });
    }
    console.log(result.success)
    const existingUser = await User.findOne({ phoneNumber: phoneNumber });
    if (existingUser) {
        return res.status(400).json({ message: "User with this phone number already exists, Please login." });
    }

    const otp = await sendOTP(phoneNumber);
    if (otp) {
        if (otp) {
            res.status(200).json({ message: "OTP sent successfully." });
        } else {
            res.status(500).json({ message: "Failed to send OTP." });
        }
    }
})

router.post("/verify", async (req: Request, res: Response) => {
    const result = userSchema.safeParse(req.body);
    const userData: userBody = req.body;

    if (!(result.success)) {
        return res.status(411).json({ msg: "Input errors", error: result.error });
    }

    const isVerified = await verifyOTP(userData.phoneNumber, userData.otpCode);

    if (isVerified) {
        //creating jwt
        const token = generateTokenUser(userData.phoneNumber);
        res.cookie('jwt', token);

        //adding the user in db
        console.log(userData)
        console.log("heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
        const user = await User.create({
            name: userData.name,
            email: userData.email,
            phoneNumber: userData.phoneNumber,
        });

        return res.status(200).json({
            message: "OTP verified successfully.",
            userCreated: user,
            token: token
        });
    } else {
        return res.status(400).json({ message: "Invalid OTP." });
    }
})

export default router;
