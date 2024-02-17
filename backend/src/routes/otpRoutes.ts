import express from 'express'
import { sendOTP, verifyOTP } from '../controllers/login';

const router = express.Router();

router.post("/send-otp", sendOTP)
router.post("/verify", verifyOTP)

export default router;
