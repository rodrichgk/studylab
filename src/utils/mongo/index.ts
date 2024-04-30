import mongoose from 'mongoose';

export async function dbConnect() {
  await mongoose.connect(process.env.MONGODB_URI || '');
}