import mongoose from "mongoose";
import { DB_NAME, DB_URI } from "../config/config.js";

export async function connectDB() {
    try {
        await mongoose.connect(`${DB_URI}${DB_NAME}`);
        console.log("DB connected successfully");
    } catch (error) {
        console.log(error.message);
    }
}
