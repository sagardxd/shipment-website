import express, { Request, Response } from 'express';
import { Admin } from '../models/admin';
import { generateTokenAdmin } from '../controllers/login';

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // Find admin by email
        const admin = await Admin.findOne({ email });

        // If admin not found or password does not match, return error
        if (!admin || admin.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = generateTokenAdmin(admin.email);
        res.cookie('jwt', token);

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error during admin login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;