import mongoose from "mongoose"

const connectDB = () => {
    try {
        mongoose.connect("mongodb + srv: //yuto-isogai:<password>@cluster0.coij8.mongodb.net/?retryWrites=true&w=majorityy") // 修正
        console.log("Success: Connected to MongoDB")
    } catch (err) {

    }
}

export default connectDB