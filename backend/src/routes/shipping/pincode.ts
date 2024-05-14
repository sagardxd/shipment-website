import express, { Request, Response } from 'express';

const router = express.Router();

router.post("/pincode", async (req:Request, res: Response) => {
            const { destinationCountry, destinationPincode, originPincode, } = req.body;

            return res.json({
                destinationCountry, destinationPincode, originPincode
            })
})

export default router;