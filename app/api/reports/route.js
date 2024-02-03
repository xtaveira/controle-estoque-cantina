import { NextResponse } from "next/server";
import connect from "@/lib/db"
// import Report from "@/models/Report";

export const GET = async (request) => {
    try {
        await connect()
        return new NextResponse("Hello!",{ status: 200});
    } catch (error) {
        return new NextResponse("Error in fetching reports" + error, { status: 500});
    }
}