import express, { Request, Response } from 'express';
import otpRoute from './routes/otpRoutes'
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT ;

app.use(express.json());
app.use("/login", otpRoute)


//home
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "howdy" });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});