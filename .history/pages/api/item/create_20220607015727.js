import connectDB from "../../../utils/database" // 追加

const createItem = (req, res) => {
    connectDB() // 追加
    console.log(req.body.title)
    return res.status(200).json({ message: "アイテム作成" })
}

export default createItem