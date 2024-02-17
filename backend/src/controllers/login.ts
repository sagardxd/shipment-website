import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';


// Twillo stuff
const accountSid = "AC66bcd0e082e03b41a347f1a7208d9812";
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = "VA72f2e5e8c17ca3c01128b8af2687b3bc";
const client = require("twilio")(accountSid, authToken);

//function to generate jwt
function generateToken(phoneNumber: string) {
    return jwt.sign({ phoneNumber }, "shipping", { expiresIn: '7d' }); // Change expiresIn as needed
}

//function for sending otp
export async function sendOTP(req: Request, res: Response) {
    const { phoneNumber } = req.body;

    try {
        await client.verify.services(verifySid).verifications.create({ to: phoneNumber, channel: "sms" });
        console.log("OTP sent successfully.");
        res.status(200).json({ message: "OTP sent successfully." });
    } catch (error) {
        console.error("Error sending OTP:", error);
        res.status(500).json({ message: "Failed to send OTP." });
    }
}

//function for verifying otp
export async function verifyOTP(req: Request, res: Response) {
    const { phoneNumber, otpCode } = req.body;

    try {
        const verificationCheck = await client.verify.services(verifySid).verificationChecks.create({ to: phoneNumber, code: otpCode });
        console.log("OTP verification status:", verificationCheck.status);

        if (verificationCheck.status === 'approved') {

            //creating jwt
            const token = generateToken(phoneNumber);
            res.status(200).json({
                message: "OTP verified successfully.",
                token: token
            });
        } else {
            res.status(400).json({ message: "Invalid OTP." });
        }



    } catch (error) {
        console.error("Error verifying OTP:", error);
        res.status(500).json({ message: "Failed to verify OTP." });
    }
}






