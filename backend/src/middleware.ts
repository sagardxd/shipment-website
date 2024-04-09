import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface userCustomRequest extends Request {
    phoneNumber?: string; // Define a property phoneNumber of type string
}

interface amdinCustomRequest extends Request {
    email?: string; // Define a property phoneNumber of type string
}

export function verifyJWT(req: userCustomRequest, res: Response, next: NextFunction) {
    const token = req.cookies.jwt; // Assuming the JWT is stored in a cookie named 'jwt'
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Missing token" });
    }

    try {
        const decoded = jwt.verify(token,  process.env.JWT_SECRET || "shippingNiggaUser") as string; // Cast decoded to string 
        if (decoded !== undefined) {
            req.phoneNumber = decoded; // Attach user's phone number to request object
            next(); // Call next middleware
        } else {
            // Handle the case where decoded is undefined (e.g., token is invalid)
            console.error("Invalid JWT token:", token);
            return res.status(403).json({ message: "Forbidden: Invalid token" });
        }
    } catch (error) {
        return res.status(403).json({ message: "hi bro its bad" });
    }
}

export function isAdmin(req: amdinCustomRequest, res: Response, next: NextFunction) {
    const token = req.cookies.jwt; // Assuming the JWT is stored in a cookie named 'jwt'
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Missing token" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "shippingNiggaAdmin") as string ;
        if (decoded !== undefined) {
            req.email = decoded; 
            next(); // Call next middleware
        } else {
            console.error("Invalid JWT token:", token);
            return res.status(403).json({ message: "Forbidden: Invalid token" });
        }
    } catch (error) {
        return res.status(403).json({ message: "Forbidden: Invalid token" });
    }
}
