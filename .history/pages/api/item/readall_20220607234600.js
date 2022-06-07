import connectDB from "../../../utils/database";
const getAllItems = (req, res) => {
    connectDB();
    return res.status(200).send({ message: "アイテム読み取り成功（オール）" });
};

export default getAllItems;