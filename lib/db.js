import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URL)
const dbname = "refeicoes"

const connectDB = async () => {
    try {
        await client.connect()
        console.log(`Connected to the ${dbname} database!`)
    } catch (error) {
        console.log(`Error connecting to the ${dbname} database \n${error.message}`)
        
    }
}

export default connectDB