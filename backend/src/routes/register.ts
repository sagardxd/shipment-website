import express, { Request, Response } from 'express';
import { sendOTP, verifyOTP,generateToken } from '../controllers/login';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

router.post("/send-otp", async(req:Request, res: Response) => {
    const {phoneNumber} = req.body;
    const otp = await sendOTP(phoneNumber);
    if(otp) {
        if (otp) {
            res.status(200).json({ message: "OTP sent successfully." });
        } else {
            res.status(500).json({ message: "Failed to send OTP." });
        }
    }
})

router.post("/verify", async (req: Request, res: Response) => {
    const { name, email, phoneNumber, otpCode } = req.body;
    const isVerified = await verifyOTP(phoneNumber, otpCode);

    if (isVerified) {
        //creating jwt
        const token = generateToken(phoneNumber);
        res.cookie('jwt', token);

        //adding the user in db
        const user = await prisma.user.create({
            data:{
                name,
                email,
                phoneNumber
            }
        })
        
        return  res.status(200).json({
            message: "OTP verified successfully.",
            userCreated: user,
            token: token
        });
    }else {
        res.status(400).json({ message: "Invalid OTP." });
    }

   return res.status(500).json({ message: "Failed to verify OTP." });

})

export default router;
