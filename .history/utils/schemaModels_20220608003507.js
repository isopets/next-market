import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title: String,
    image: String,
    price: String,
    description: String,
    email: String,
});

const UserSchema = new Schema({
    name: string,
    email: string,
    password:
});

export const ItemModel =
    mongoose.models.Item || mongoose.model("Item", ItemSchema);