import express, { Request, Response } from 'express';

const router = express.Router();

router.get("/get-services", async (req:Request, res: Response) => {
            
      
                return res.json({
                   "A": 200,
                   "B": 130,
                   "C": 230,
                })
           
           
})

router.post("/set-service", async (req:Request, res: Response) => {
    const { service, servicePrice} = req.body;


        return res.json({
            service, servicePrice
        })
   
   
})


export default router;