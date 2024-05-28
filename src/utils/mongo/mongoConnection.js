import mongoose from "mongoose";
import { config } from "dotenv";
config()

export const mongoConnection = () => mongoose.connect(process.env.DB_URL)