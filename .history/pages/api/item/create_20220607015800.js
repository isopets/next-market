import connectDB from "../../../utils/database" // 追加

const createItem = (req, res) => {
    connectDB()
    console.log(req.body.title)
    return res.status(200).json({ message: "アイテム作成" })
}

export default createItem

mongodb + srv: //yuto-isogai:<password>@cluster0.coij8.mongodb.net/?retryWrites=true&w=majority