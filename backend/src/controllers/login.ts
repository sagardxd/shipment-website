import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

// Twillo stuff
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = process.env.TWILIO_VERIFY_SID;
const jwtSecretUser = process.env.JWT_SECRET_USER;
const jwtSecretAdmin = process.env.JWT_SECRET_ADMIN;
const client = require("twilio")(accountSid, authToken, {
    lazyloading: true
});

//function to generate jwt
export function generateTokenUser(identifier: string) {
    return jwt.sign({ identifier }, jwtSecretUser || "shippingNiggaUser", { expiresIn: '7d' }); // Change expiresIn as needed
}

export function generateTokenAdmin(identifier: string) {
    return jwt.sign({ identifier }, jwtSecretAdmin || "shippingNiggaAdmin", { expiresIn: '7d' }); // Change expiresIn as needed
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
// Function for verifying otp
export async function verifyOTP(phoneNumber: string, otpCode: string) {
    try {
        const verificationCheck = await client.verify.v2.services(verifySid).verificationChecks.create({ to: phoneNumber, code: otpCode });
        console.log("OTP verification status:", verificationCheck.status);

        return verificationCheck.status === 'approved';
    } catch (error) {
        console.error("Error verifying OTP:", error);
        return false; // Return false indicating verification failed
    }
}





