import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const uri = process.env.MONGO_DB_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Database Connected!');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw error;
  }
};
