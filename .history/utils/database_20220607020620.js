import mongoose from "mongoose";

const connectDB = () => {
    try {
        mongoose.connect(
            "mongodb+srv://: //yuto-isogai:a5616randr@cluster0.coij8.mongodb.net/appDatabase?retryWrites=true&w=majority"
        );
        console.log("Success: Connected to MongoDB");
    } catch (err) {
        console.log("Failure: Unconnected to MongoDB");
        throw new Error();
    }
};

export default connectDB;