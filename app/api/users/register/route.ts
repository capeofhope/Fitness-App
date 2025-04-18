import bcryptjs from 'bcryptjs';
import User from '@/models/userModel';
import {NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/dbConfig/dbConfig';

await connectDB();
export async function POST(req: NextRequest, res: NextResponse) {

  const { name, email, password } =await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ message: 'Please fill all fields.' }, { status: 400 });
  }

  const existingUser = await User.findOne({ email:email});
  if (existingUser) {
    return NextResponse.json({ message: 'User already exists.' }, { status: 400 });
  }
  const salt= await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return NextResponse.json({ message: 'User registered successfully.', user }, { status: 201 });
}
