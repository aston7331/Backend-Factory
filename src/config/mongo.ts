import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  const MONGO_URI = process.env.MONGO_URI || '';
  if (!MONGO_URI) {
    console.warn('MONGO_URI not set in environment. Skipping MongoDB connection.');
    return;
  }
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
