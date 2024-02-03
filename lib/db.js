import { tracingChannel } from "diagnostics_channel";
import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {autoIndex: true
        })
        console.log("Mongo connection sucessfully established")
    } catch (error) {
        throw new Error("Error in connecting to Mongo: " + error)
    }
}

export default connect;