import express, { Request, Response } from 'express';
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser';
import loginRoute from './routes/auth/login'
import registerRoute from './routes/auth/register'
import adminTaskRoute from './routes/admin/adminTask'
import adminLogin from './routes/admin/adminLogin'
import pincode from "./routes/shipping/pincode"
import details from "./routes/shipping/details"

import dotenv from 'dotenv';
import { verifyJWT } from './middleware';
dotenv.config();

//connecting to database
const uri = process.env.MONGO_URL;
if (!uri) {
  throw new Error('MONGO_URL environment variable is not defined.');
}
mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use("/login", loginRoute);
app.use("/register",registerRoute)
app.use("/admin",adminTaskRoute)
app.use("/admin-auth", adminLogin)
app.use("/shipment", pincode, details)


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