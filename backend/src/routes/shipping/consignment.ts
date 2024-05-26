import express, { Request, Response } from 'express';

const router = express.Router();

router.get("/totalPrice", async (req:Request, res: Response) => {

        //price logic 

                return res.json({
                    totalPrice: 5000
                })
          
})

router.get("/totalPrice", async (req:Request, res: Response) => {

    //price logic 

            return res.json({
                totalPrice: 5000
            })
      
})

export default router;