import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import loginRoute from './routes/login'
import registerRoute from './routes/register'
import adminRoute from './routes/admin'
import dotenv from 'dotenv';
import { verifyJWT } from './middleware';
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use("/login", loginRoute);
app.use("/register",registerRoute)
app.use("/admin",adminRoute)


//home
app.get("/", verifyJWT, (req: Request, res: Response) => {
  res.status(200).json({ message: "howdy" });
});

app.get("/logout", verifyJWT, (req: Request, res: Response) => {
  // Destroy session and invalidate JWT on the server
  res.clearCookie('jwt');
  res.status(200).json({ message: "Logout successful." });
})

app.get("/get-auth", verifyJWT, (req: Request, res: Response) => {
  // If the middleware passed, the user is authenticated
  res.status(200).json({ authenticated: true });
})



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});