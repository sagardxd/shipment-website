import express, { Request, Response, Router } from 'express';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/userData", async(req: Request,res: Response) => {
    const allUserData = await prisma.user.findMany();
    if(allUserData){
        return res.status(200).json({allUserData: allUserData});
    }else{
        return res.json({error: "error while fetching"})
    }
})


export default router;