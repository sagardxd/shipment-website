import express, { Request, Response } from 'express';
import { sendOTP, verifyOTP, generateToken } from '../controllers/login';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/send-otp", async (req: Request, res: Response) => {
    const { phoneNumber } = req.body;

    try {
        // Check if a user with the provided phone number already exists
        const existingUser = await prisma.user.findUnique({
            where: { phoneNumber: phoneNumber }
        });
        if (existingUser) {
            return res.status(400).json({ message: "User with this phone number already exists." });
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
    const { phoneNumber, otpCode } = req.body;
    const isVerified = await verifyOTP(phoneNumber, otpCode);

    if (isVerified) {
        //creating jwt
        const token = generateToken(phoneNumber);
        res.cookie('jwt', token);
        return  res.status(200).json({
            message: "OTP verified successfully.",
            token: token
        });
    }else {
       return res.status(400).json({ message: "Invalid OTP." });
    }

   return res.status(500).json({ message: "Failed to verify OTP." });

})

export default router;
