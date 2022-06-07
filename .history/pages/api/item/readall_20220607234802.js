import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels";
const getAllItems = async(req, res) => {
    try {
        await connectDB();
        return res.status(200).send({ message: "アイテム読み取り成功（オール）" });
    } catch (err) {
        return res.status(400).send({ message: "アイテム読み取り失敗（オール）" });
    }
};

export default getAllItems;