import express, { Request, Response } from 'express';

const router = express.Router();

router.post("/origin-address", async (req:Request, res: Response) => {
            const { name, phone, email, address, state, city, pincode, country} = req.body;

      
                return res.json({
                    name, phone, email, address, state, city, pincode, country
                })
           
           
})

router.post("/destination-address", async (req:Request, res: Response) => {
    const { name, phone, email, address, state, city, pincode, country} = req.body;


        return res.json({
            name, phone, email, address, state, city, pincode, country
        })
   
   
})


export default router;