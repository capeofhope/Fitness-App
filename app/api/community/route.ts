import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";
import Community from "@/models/communityModel";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
connectDB();
export async function POST(request:NextRequest){
    try{
        const userId=await getDataFromToken(request);
        const user=await User.findOne({_id:userId});
        if(!user){
            return NextResponse.json({message:"User does not exist or token is invalids.",status:400});
        }
        const {name,description,imageUrl}=await request.json();
        const community=await Community.create({name:name,description:description,image_url:imageUrl,members:{userId:userId,role:"admin"}});
        return NextResponse.json({message:"Community created",data:community});
    }catch(error:any){
        return NextResponse.json({message:error.message,status:500});
    }
}

export async function GET(request:NextRequest){
    try{
        const userId=await getDataFromToken(request);
        const user=await User.findOne({_id:userId});
        if(!user){
            return NextResponse.json({message:"User does not exist or token is invalids.",status:400});
        }
        const communities=await Community.find({}).populate("members.user","name image_url").sort({createdAt:-1});
        return NextResponse.json({message:"Communities fetched",data:communities});
    }
    catch(error:any){
        return NextResponse.json({message:error.message,status:500});
    }
}

