const updateItem = (req, res) => {
        import connectDB from "../../../../utils/database" // 追加

        const updateItem = async(req, res) => {　　 // 追加
            // ↓追加
            try {
                await connectDB()
                return res.status(200).send({ message: "アイテム編集成功" })
            } catch (err) {
                return res.status(400).json({ message: "アイテム編集失敗" })
            }
            // ↑追加
        }

        export default updateItem
        export default updateItem;