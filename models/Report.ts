import mongoose from "mongoose";

const {Schema} = mongoose;

const reportSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    vendas: {
        type: Number,
        required: true
    }
}, {timestamps: true})

export default mongoose.model('Report', reportSchema);