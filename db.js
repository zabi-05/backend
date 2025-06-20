import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const dbUrl= process.env.MONGODBURL
    await mongoose.connect(dbUrl)
    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
  }
};