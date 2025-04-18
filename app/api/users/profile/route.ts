import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {NextRequest,NextResponse} from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";


connectDB();

export async function POST(request:NextRequest) {
    try {
        const userId=await getDataFromToken(request);
        const user=await User.findOne({_id:userId}).select("-password");
        if(!user){
            return NextResponse.json({message:"User does not exist or token is invalids.",status:400});
        }
        return NextResponse.json({message:"Profile fetched",data:user});
    } catch (error:any) {
        return NextResponse.json({message:error.message,status:500});
    }
}

export async function PUT(request:NextRequest) {
    try {
        const userId=await getDataFromToken(request);
        const {height,weight,goal}=await request.json();
        const user=await User.findOne({_id:userId});
        if(!user){
            return NextResponse.json({message:"User does not exist or token is invalids.",status:400});
        }
        user.height_cm=height;
        user.weight_kg=weight;
        user.fitness_goal=goal;
        await user.save();
        return NextResponse.json({message:"Profile updated",data:user});
    } catch (error:any) {
        return NextResponse.json({message:error.message,status:500});
    }
}
