import { connectDB } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import Community from "@/models/communityModel";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
connectDB();
export async function GET(request: NextRequest, { params }: { params: { communityId: string } }) {
    try{
        const userId=await getDataFromToken(request);
        const user=await User.findOne({_id:userId});
        if(user._id!==userId){
            return new NextResponse(JSON.stringify({message:"User does not exist or token is invalid",status:400}),{status:400});
        }
        const { communityId } = params;
        const community = await Community.findOne({_id:communityId,members:{$elemMatch:{userId:userId}}});
        if(!community){
            return new NextResponse(JSON.stringify({message:"Community not found",status:400}),{status:400});
        }
        return new NextResponse(JSON.stringify({message:"Community found",status:200,community}),{status:200});
    }catch(error:any){
        return new NextResponse(JSON.stringify({message:error.message,status:500}),{status:500});
    }
}