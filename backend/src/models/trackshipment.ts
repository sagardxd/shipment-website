import mongoose, { Schema, Document } from 'mongoose';

interface TrackshipmentInterface extends Document {
  awbNumber: string;
  bookingDate: Date;
  consigneeName: string;
  receiverName: string;
  destinationCity: string;
  destination: string;
  originCity: string;
  origin: string;
  forwardingNo: string;
  status: string;
}

const trackshipmentSchema: Schema<TrackshipmentInterface> = new Schema({
  awbNumber: { type: String, required: true },
  bookingDate: { type: Date, required: true },
  consigneeName: { type: String, required: true },
  receiverName: { type: String, required: true },
  destinationCity: { type: String, required: true },
  destination: { type: String, required: true },
  originCity: { type: String, required: true },
  origin: { type: String, required: true },
  forwardingNo: { type: String, required: true },
  status: { type: String, required: true }
});

const Trackshipment = mongoose.model<TrackshipmentInterface>('Trackshipment', trackshipmentSchema);

export default Trackshipment;
