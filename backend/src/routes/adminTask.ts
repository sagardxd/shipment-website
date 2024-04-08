import express, { Request, Response } from 'express';
import Trackshipment from '../models/trackshipment'; 
import { isAdmin } from '../middleware';


const router = express.Router();
router.use(isAdmin);


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

// Route for admin to update shipment by AWB number
router.put("/update-shipment/:awbNumber", async (req: Request, res: Response) => {
    try {
        const awbNumber = req.params.awbNumber;
        const updateData = req.body;

        // Find the shipment by AWB number
        const shipment = await Trackshipment.findOne({ awbNumber });

        if (!shipment) {
            return res.status(404).json({ error: 'Shipment not found' });
        }

        // Update the shipment with the provided data
        Object.assign(shipment, updateData);

        // Save the updated shipment
        await shipment.save();

        res.status(200).json({ message: 'Shipment updated successfully' });
    } catch (error) {
        console.error('Error updating shipment:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;