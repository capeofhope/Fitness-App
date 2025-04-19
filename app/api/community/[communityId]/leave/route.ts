import { getDataFromToken } from "@/helpers/getDataFromToken";
import Community from "@/models/communityModel";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request:NextRequest,{params}:{params:{communityId:string}}){
    try{
        const {communityId}=params;
        const userId=await getDataFromToken(request);
        const user=await User.findOne({_id:userId});
        if(!user){
            return new NextResponse(JSON.stringify({message:"User does not exist or token is invalid",status:400}),{status:400});
        }
        const community=await Community.findOne({_id:communityId,members:{$elemMatch:{userId:userId}}});
        if(!community){
            return new NextResponse(JSON.stringify({message:"Community not found",status:400}),{status:400});
        }
        await Community.updateOne({_id:communityId},{$pull:{members:{userId:userId}}});
        return new NextResponse(JSON.stringify({message:"User removed from community",status:200}),{status:200});
    }catch(error:any){
        return new NextResponse(JSON.stringify({message:error.message,status:500}),{status:500});
    }
}