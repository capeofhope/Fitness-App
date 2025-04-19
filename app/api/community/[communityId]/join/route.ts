import { connectDB } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import Community from "@/models/communityModel";
import { NextRequest, NextResponse } from "next/server";
connectDB();
export async function PATCH(request:NextRequest,{params}:{params:{communityId:string}}){
    try{
        const {communityId}=params;
        const {user}=await request.json();
        const userId=await getDataFromToken(request);
    if(user._id!==userId){
        return new NextResponse(JSON.stringify({message:"User does not exist or token is invalids.",status:400}),{status:400});
    }
        const alreadyMember=await Community.findOne({_id:communityId,members:{$elemMatch:{user:userId}}});
        if(alreadyMember){
            return new NextResponse(JSON.stringify({message:"Community already joined",status:400}),{status:400});
        }
        await Community.updateOne({_id:communityId},{$push:{members:{userId:userId,role:"member"}}});
        return new NextResponse(JSON.stringify({message:"Community joined successfully",status:200,data:user}),{status:200});
    }catch(error:any){
        return new NextResponse(JSON.stringify({message:error.message,status:500}),{status:500});
    }
}