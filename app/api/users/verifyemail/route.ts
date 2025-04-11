import { connectDB } from "@/dbConfig/dbConfig";
import { sendEmail } from "@/helpers/mailer";
import User from "@/models/userModel";
import {NextRequest,NextResponse} from "next/server";

connectDB();

export async function POST(req: NextRequest) {
    try{
        const body=await req.json();
        const {token}=body;
        if(!token){
            return NextResponse.json({message:"Token is required"},{status:400})
        }
        const user=await User.findOne({verifyToken:token,verifyTokenExpiry:{$gt:Date.now()}});
        if(!user){
            return NextResponse.json({message:"Token is invalid or expired"},{status:400})
        }
        user.isVerified=true;
        user.verifyToken=undefined;
        user.verifyTokenExpiry=undefined;
        await user.save();
        const message=`<h1>Hello ${user.name}</h1><p>Your email has been verified successfully</p>`;
        await sendEmail({
            to:user.email,
            subject:"Email Verification Success",
            text:"",
            html:message
        });
        return NextResponse.json({message:"Email verified successfully"},{status:200})
    }catch(err:any){
        return NextResponse.json({message:err.message},{status:500})
    }
}