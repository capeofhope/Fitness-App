import { getDataFromToken } from "@/helpers/getDataFromToken";
import Community from "@/models/communityModel";
import User from "@/models/userModel";
import Message from "@/models/messageModel";
import { connectDB } from "@/dbConfig/dbConfig";   
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function GET(request: NextRequest, { params }: { params: { communityId: string } }) {
    try {
        const { communityId } = params;
        const userId = await getDataFromToken(request);
        const user = await User.findOne({ _id: userId });
        if (!user) {
            return new NextResponse(JSON.stringify({ message: "User does not exist or token is invalid", status: 400 }), { status: 400 });
        }
        const community=await Community.findOne({_id:communityId,members:{$elemMatch:{userId:userId}}});
        if (!community) {
            return new NextResponse(JSON.stringify({ message: "Community not found", status: 400 }), { status: 400 });
        }
        const data=await Message.find({community:communityId}).populate("user","name image_url").sort({createdAt:-1});
        if (!data) {
            return new NextResponse(JSON.stringify({ message: "No messages found", status: 400 }), { status: 400 });
        }
        return new NextResponse(JSON.stringify({ message: "Messages fetched", status: 200, data: data }), { status: 200 });
    } catch (error:any) {
        return new NextResponse(JSON.stringify({ message: error.message, status: 500 }), { status: 500 });
    }
}

export async function POST(request: NextRequest, { params }: { params: { communityId: string } }) {
    try {
        const { communityId } = params;
        const userId = await getDataFromToken(request);
        const user = await User.findOne({ _id: userId });
        if (!user) {
            return new NextResponse(JSON.stringify({ message: "User does not exist or token is invalid", status: 400 }), { status: 400 });
        }
        const community = await Community.findOne({ _id: communityId, members: { $elemMatch: { user: user } } });
        if (!community) {
            return new NextResponse(JSON.stringify({ message: "Community not found", status: 400 }), { status: 400 });
        }
        const { message } = await request.json();
        if (!message) {
            return new NextResponse(JSON.stringify({ message: "Message is required", status: 400 }), { status: 400 });
        }
        const newMessage = await Message.create({ content: message, sender: userId, community: communityId });
        const populatedMessage = await Message.findOne({ _id: newMessage._id }).populate("user", "name image_url").sort({ createdAt: -1 });
        if (!populatedMessage) {
            return new NextResponse(JSON.stringify({ message: "Message not found", status: 400 }), { status: 400 });
        }
        return new NextResponse(JSON.stringify({ message: "Message sent", status: 200, data: populatedMessage }), { status: 200 });
    }
    catch (error:any) {
        return new NextResponse(JSON.stringify({ message: error.message, status: 500 }), { status: 500 });
    }
}