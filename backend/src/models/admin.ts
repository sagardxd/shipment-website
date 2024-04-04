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

// Create default admin if not exists
async function createDefaultAdmin() {
  try {
    const adminExists = await Admin.findOne({ email: 'admin@example.com' });
    if (!adminExists) {
      const defaultAdmin = new Admin({
        email: 'admin@example.com',
        password: 'adminpassword' // Replace with your desired default password
      });
      await defaultAdmin.save();
      console.log('Default admin created successfully.');
    }
  } catch (error) {
    console.error('Error creating default admin:', error);
  }
}

export { Admin, createDefaultAdmin };
