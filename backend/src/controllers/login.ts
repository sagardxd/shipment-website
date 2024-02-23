import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

// Twillo stuff
const accountSid = "AC66bcd0e082e03b41a347f1a7208d9812";
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = "VA72f2e5e8c17ca3c01128b8af2687b3bc";
const client = require("twilio")(accountSid, authToken);

//function to generate jwt
export function generateToken(phoneNumber: string) {
    return jwt.sign({ phoneNumber }, "shipping", { expiresIn: '7d' }); // Change expiresIn as needed
}

//function for sending otp
export async function sendOTP(phoneNumber: string) {
    try {
        await client.verify.v2.services(verifySid).verifications.create({ to: phoneNumber, channel: "sms" });
        console.log("OTP sent successfully.");
        return true;
    } catch (error) {
        console.error("Error sending OTP:", error);
        return false;
    }
}

//function for verifying otp
export async function verifyOTP(phoneNumber: string, otpCode: string) {

    try {
        const verificationCheck = await client.verify.v2.services(verifySid).verificationChecks.create({ to: phoneNumber, code: otpCode });
        console.log("OTP verification status:", verificationCheck.status);

        if (verificationCheck.status === 'approved') {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error("Error verifying OTP:", error);
    }
}






