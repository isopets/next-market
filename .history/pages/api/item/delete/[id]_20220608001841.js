import connectDB from "../../../../utils/database"

const deleteItem = async(req, res) => {
    try {
        await connectDB()
        return res.status(200).send({ message: "アイテム削除成功" })
    } catch (err) {
        return res.status(400).json({ message: "アイテム削除失敗" })
    }
}

export default deleteItem