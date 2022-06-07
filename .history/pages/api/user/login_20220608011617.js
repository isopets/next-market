import connectDB from "../../../utils/database";
import { UserModel } from "../../../utils/schemaModels";

const loginUser = async(req, res) => {
        try {
            await connectDB();
            const saveUserData = await UserModel.findOne({ email: req.body.email });
            if (saveUserData) {
                // ユーザーデータが存在する場合の処理
                if (req.body.password === saveUserData.password) {
                    return res.status(200).json({ message: "ログイン成功" });
                } else {

                    //ぱすわーどがまちがっているばあいの           // ユーザーデータが存在しない場合の処理
                    return res
                        .status(400)
                        .json({ message: "ログイン失敗：ユーザー登録をしてください" });
                }
            } catch (err) {
                return res.status(400).json({ message: "ログイン失敗" });
            }
        };
        export default loginUser;