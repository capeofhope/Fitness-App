import { connectDB } from "@/dbConfig/dbConfig";
import { sendEmail } from "@/helpers/mailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import {NextRequest,NextResponse} from "next/server";

connectDB();

export async function POST(request:NextRequest){
    try{
        const body=await request.json();
        const {name,email,password}=body;
        //validation

        if(!name || !email || !password){
            return NextResponse.json({message:"Please provide all fields",status:400});
        }
        const user=await User.findOne({email});
        if(user){
            return NextResponse.json({message:"User already exists",status:400});
        }
        const salt=await bcryptjs.genSalt(10);
        const hashedPassword=await bcryptjs.hash(password,salt);
        const newUser=await new User({
            name:name,
            email:email,
            password:hashedPassword,
            verified:false,
            verificationToken:"",
            verificationTokenExpiry:0,
            resetPasswordToken:"",
            resetPasswordTokenExpiry:0,
        })
        const savedUser=await newUser.save();
        //send verification email
        await sendEmail({email,emailType:"VERIFY",userId:savedUser._id});
        return NextResponse.json({message:"User created successfully",status:201,data:savedUser});
    }catch(err:any){
        return NextResponse.json({message:err.message,status:500});
    }
}