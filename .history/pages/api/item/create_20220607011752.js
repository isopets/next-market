const createItem = (req, res) => {
    console.log(req) // 追加
    return res.status(200).json({ message: "アイテム作成" });
};

export default createItem;