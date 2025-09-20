import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 4000,
  JWT_SECRET: process.env.JWT_SECRET || "supersecret",
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/bookmarks",
};