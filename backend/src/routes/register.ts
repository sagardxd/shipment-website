import express, { Request, Response } from 'express';
const router = express.Router();

router.post("/", async(req:Request, res: Response) => {
    const {name, email, phoneNumber} = req.body;
    
})

export default router;
