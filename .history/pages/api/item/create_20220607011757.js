const createItem = (req, res) => {
    console.log(req);
    return res.status(200).json({ message: "アイテム作成" });
};

export default createItem;