import connectDB from "../../../utils/database";
const getSingleItem = async(req, res) => {
    try {
        await connectDB().returnre
    }
    return res.status(200).send({ message: "アイテム読み取り成功（シングル）" });
};

export default getSingleItem;