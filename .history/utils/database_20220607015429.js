import mongoose from "mongoose"

const connectDB = () => {
    try {
        mongoose.connect("mongodb+srv://monotein:js123@cluster0.gm02l.mongodb.net/appDataBase?retryWrites=true&w=majority") // 修正
        console.log("Success: Connected to MongoDB")
    } catch (err) {

    }
}

export default connectDB