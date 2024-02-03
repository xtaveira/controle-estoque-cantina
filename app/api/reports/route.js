import { NextResponse } from "next/server"; 
import connect from "@/database"
import Report from "@/models/Report";

export const GET = async (req) => {
    try {
        await connect()
    } catch (error) {
        throw new NextResponse("Error in fetching reports" + error, { status: 500})
    }
}