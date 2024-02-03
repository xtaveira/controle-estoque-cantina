import { NextResponse } from "next/server";
import connectDB from "@/lib/db"

export const GET = async (request) => {
    try {
        await connectDB()
        return new NextResponse("Hello!",{ status: 200});
    } catch (error) {
        return new NextResponse("Error in fetching reports" + error, { status: 500});
    }
}