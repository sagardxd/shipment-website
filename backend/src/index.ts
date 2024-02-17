import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser'; 
import otpRoute from './routes/otpRoutes'
import dotenv from 'dotenv';
import { verifyJWT } from './middleware';
dotenv.config();

const app = express();
const PORT = process.env.PORT ;

app.use(express.json());
app.use(cookieParser());
app.use("/login", otpRoute)


//home
app.get("/", verifyJWT ,(req: Request, res: Response) => {
  res.status(200).json({ message: "howdy" });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});