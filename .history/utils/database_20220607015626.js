import mongoose from "mongoose";

const connectDB = () => {
    try {
        mongoose.connect(
            "mongodb + srv: //yuto-isogai:a5616randr@cluster0.coij8.mongodb.net/?retryWrites=true&w=majorityy"
        );
        console.log("Success: Connected to MongoDB");
    } catch (err) {

    }
};

export default connectDB;