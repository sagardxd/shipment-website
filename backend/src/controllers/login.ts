import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Function to generate JWT
export function generateToken(phoneNumber: string) {
    return jwt.sign({ phoneNumber }, "shipping", { expiresIn: '7d' }); // Change expiresIn as needed
}

// Function for sending OTP
export async function sendOTP(phoneNumber: string) {
    try {
        // Create a Verify service
        const service = await client.verify.services.create({ friendlyName: 'My Verify Service' });

        // Send OTP using the newly created service SID
        await client.verify.services(service.sid).verifications.create({ to: phoneNumber, channel: "sms" });

        console.log("OTP sent successfully.");
        return true;
    } catch (error) {
        console.error("Error sending OTP:", error);
        return false;
    }
}

// Function for verifying OTP
export async function verifyOTP(phoneNumber: string, otpCode: string) {
    try {
        // Verify OTP using the service SID obtained during OTP sending
        const verificationCheck = await client.verify.services(process.env.TWILIO_VERIFY_SID)
            .verificationChecks.create({ to: phoneNumber, code: otpCode });

        console.log("OTP verification status:", verificationCheck.status);

        if (verificationCheck.status === 'approved') {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error("Error verifying OTP:", error);
        return false;
    }
}
