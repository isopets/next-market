import mongoose from "mongoose"

const connectDB = () => {
    try {
        mongoose.connect("mongodb+srv://monotein:<password>@cluster0.oskvj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority") // 追加
        console.log("Success: Connected to MongoDB")
    } catch (err) {

    }
}

export default connectDB