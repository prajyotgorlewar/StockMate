import mongoose  from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅Database connected succesfully.");
        

    } catch (error) {
        console.log("❌Error connection database");
        process.exit(1);   
    }
}

export default connectDB