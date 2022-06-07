import connectDB from "../../../utils/database";
import { UserModel } from "../../../utils/schemaModels";

const loginUser = async(req, res) => {
    try {
        await connectDB();
        await SUserModel.findOne({ email: req.host.email });
        console.log(saveUserData);
        return res.status(200).json({ message: "ログイン成功" });
    } catch (err) {
        return res.status(400).json({ message: "ログイン失敗" });
    }
};

export default loginUser;