import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

// Twillo stuff
const accountSid = "AC66bcd0e082e03b41a347f1a7208d9812";
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = "VA72f2e5e8c17ca3c01128b8af2687b3bc";
const client = require("twilio")(accountSid, authToken);

const app = express();
const PORT = process.env.PORT ;
app.use(express.json());

//function for sending otp
async function sendOTP(phoneNumber: string) {
  try {
      await client.verify.services(verifySid).verifications.create({ to: phoneNumber, channel: "sms" });
      console.log("OTP sent successfully.");
  } catch (error) {
      console.error("Error sending OTP:", error);
  }
}

// Sample route to initiate OTP sending
app.post("/send-otp", async (req: Request, res: Response) => {
  const { phoneNumber } = req.body;
  await sendOTP(phoneNumber);
  res.status(200).json({ message: "OTP sent successfully." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});