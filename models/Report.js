import mongoose from "mongoose";

const { Schema } = mongoose;

const reportSchema = new Schema({
    nome: String,
    coca: Number,
}, {timestamps: true})

export default mongoose.model("Report", reportSchema);