import mongoose  from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

let isConnected = false; // Cache connection to prevent cold start issues
console.log("process.env.MONGOURI",process.env.MONGOURI,)

const conn = async () => {
    if (isConnected) {
        console.log('✅ MongoDB already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGOURI, {
        });
        isConnected = true;
        console.log('✅ MongoDB connected');
    } catch (error) {
        console.error('❌ MongoDB connection failed:', error);
        process.exit(1); // Exit if DB is unreachable
    }
};

export default conn;
