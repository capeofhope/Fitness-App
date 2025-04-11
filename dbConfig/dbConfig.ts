import mongoose from "mongoose";

export const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI!).then(()=>{
            console.log("Connected to the database successfully");
        }).catch((err)=>{
            console.log("Error in connecting to the database",err);
        });
    }catch(err){
        console.log("Something went wrong while connecting to the database",err);
    }
}