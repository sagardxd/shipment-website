import express, { Request, Response } from 'express';

const router = express.Router();

router.post("/details", async (req:Request, res: Response) => {
            const { isDocs, weight, length, breadth, height, value, content } = req.body;

            if(isDocs) {
                return res.json({
                    weight
                })
            }
            else{
                return res.json({
                    weight,length, breadth, height, value, content
                })
            }
           
})

export default router;