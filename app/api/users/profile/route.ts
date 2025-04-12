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
