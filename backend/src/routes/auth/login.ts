import express, { Request, Response } from 'express';
import {z} from 'zod';
import { sendOTP, verifyOTP, generateTokenUser } from '../../controllers/login';
import { otpSchema, phoneNumberSchema } from '../../zod/login';
import User from '../../models/user'; // Import the User model

const router = express.Router();

type OtpScehmaType = z.infer<typeof otpSchema>;

router.post("/send-otp", async (req: Request, res: Response) => {
    const result = phoneNumberSchema.safeParse(req.body);
    const { phoneNumber } = req.body;

    if (!(result.success)) {
        return res.status(411).json({msg:"Input errors", error: result.error});
      }

    try {
        // Check if a user with the provided phone number already exists
        const existingUser = await User.findOne({ phoneNumber: phoneNumber });
        if (!existingUser) {
            return res.status(400).json({ message: "User with this phone number don't exists, register your number." });
        }

        // If the user doesn't exist, proceed to send OTP
        const otpSent = await sendOTP(phoneNumber);

        if (otpSent) {
            return res.status(200).json({ message: "OTP sent successfully." });
        } else {
            return res.status(500).json({ message: "Failed to send OTP." });
        }
    } catch (error) {
        console.error("Error sending OTP:", error);
        return res.status(500).json({ message: "Failed to send OTP." });
    }
});

router.post("/verify", async (req: Request, res: Response) => {

    const result = otpSchema.safeParse(req.body);
    const updatedBody : OtpScehmaType = req.body;

    if (!result.success) {
        return res.status(411).json({message: "Input errors"});  
      }

    const isVerified = await verifyOTP(updatedBody.phoneNumber, updatedBody.otpCode);
    if (isVerified) {
        //creating jwt
        const token = generateTokenUser(updatedBody.phoneNumber);
        res.cookie('jwt', token);
        return  res.status(200).json({
            message: "OTP verified successfully.",
            token: token
        });
    }else {
       return res.status(400).json({ message: "Invalid OTP." });
    }
})

export default router;
