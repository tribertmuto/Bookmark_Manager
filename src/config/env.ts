import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const connectDB = async () => {
  try {
    const mongoURI = "mongodb://localhost:27017/bookmap";
    const options = {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000,
    };

    await mongoose.connect(mongoURI, options);
    console.log("MongoDB Connected Successfully");
  } catch (error: any) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

export const ENV = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || "BookMapSecret",
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/bookmap",
};

export default connectDB;