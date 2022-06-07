import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels";
const createItem = (req, res) => {
    try {
        connectDB();
        console.log(req.body.title);
        return res.status(200).json({ message: "アイテム作成成功" });
    } catch (err) {
        return res.status(400).json({ message: "アイテム作成失敗" });
    }
};

export default createItem;