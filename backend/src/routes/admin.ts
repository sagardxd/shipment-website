import express, { Request, Response, Router } from 'express';
import User from '../models/user'; 
import Trackshipment from '../models/trackshipment'; 


const router = express.Router();


router.get('/all-data', async(req: Request, res: Response) => {
    try {
        const shipments = await Trackshipment.find();
        res.status(200).json(shipments);
    }

    catch (error) {
        console.error('Error adding data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

// Route for admin to add data
router.post("/add-data", async (req: Request, res: Response) => {
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

export default router;