import express, { Request, Response, Router } from 'express';
import Trackshipment from '../models/trackshipment'; // Import the User model


const router = express.Router();

// Route to fetch all user data
router.get("/allUserData", async (req: Request, res: Response) => {
    try {
        const allUserData = await User.find();
        return res.status(200).json({ allUserData });
    } catch (error) {
        console.error("Error while fetching:", error);
        return res.status(500).json({ error: "Error while fetching data" });
    }
});

export default router;

// Route for admin to add data
router.post("/admin/add-data", adminAuthMiddleware, async (req: Request, res: Response) => {
    try {
        // Extract data from request body
        const {
            awbNumber,
            bookingDate,
            consigneeName,
            receiverName,
            destinationCity,
            destination,
            originCity,
            origin,
            forwardingNo,
            status
        } = req.body;

        // Create new track shipment document
        const trackShipment = new Trackshipment({
            awbNumber,
            bookingDate,
            consigneeName,
            receiverName,
            destinationCity,
            destination,
            originCity,
            origin,
            forwardingNo,
            status
        });

        // Save track shipment document to the database
        await trackShipment.save();

        res.status(201).json({ message: 'Data added successfully' });
    } catch (error) {
        console.error('Error adding data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
