import mongoose, { Schema, Document } from 'mongoose';

interface UserInterface extends Document {
  name: string;
  email: string;
  phoneNumber?: string;
}

const userSchema: Schema<UserInterface> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, unique: true }
});

const User = mongoose.model<UserInterface>('User', userSchema);

export default User;
