import express, { Request, Response, Router } from 'express';
import  User  from '../models/user'; // Import the User model

const router = express.Router();

// Route to fetch all user data
router.get("/allUserData", async (req: Request, res: Response) => {
    try {
        const allUserData = await User.find();
        return res.status(200).json({ allUserData });
    } catch (error) {
        console.error("Error while fetching:", error);
        return res.status(500).json({ error: "Error while fetching data" });
    }
});

export default router;
