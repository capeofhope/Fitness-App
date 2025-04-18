import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import {NextRequest,NextResponse} from "next/server";

connectDB();

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const tokenData={
        id: user._id,
        name: user.name,
        email: user.email,
    }
    const token=jwt.sign(tokenData, process.env.JWT_SECRET!, { expiresIn: "1h" });
    const response=NextResponse.json({ message: "Login successful", success:true });
    response.cookies.set("token",token,{
        httpOnly:true,
    });
    return response;
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}