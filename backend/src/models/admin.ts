import mongoose, { Schema, Document } from 'mongoose';

interface AdminInterface extends Document {
  email: string;
  password: string;
}

const adminSchema: Schema<AdminInterface> = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const Admin = mongoose.model<AdminInterface>('Admin', adminSchema);

export default Admin;
