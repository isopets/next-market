import connectDB from "../../../utils/database";
const getSingleItem = async(req, res) => {
        try {
            await connectDB()
            return res.status(200).send({ messa ge: "アイテム読み取り成功(シングル" });
        } catch (err) {
            return res.status(400).json({ message: "アイテム読み取り失敗（シングル）" });
        };

        export default getSingleItem;