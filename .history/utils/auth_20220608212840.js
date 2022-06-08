import jwt from "jsonwebtoken";
const secret_key = "nextmarket";
const auth = handler => {
    return async(req, res) => {
        if (req.method === "GET") {
            return handler(req, res);
        }
        const token =
            "eyeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhoaGhoaGhoaGhoaGhoaGhoaCIsImlhdCI6MTY1NDY5MTI3OSwiZXhwIjoxNjU0Nzc0MDc5fQ.k4ZFtpKxIXEEPI0zbMOxiI7UjgKIALbrOCkBbHnmOrsbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbmRwLjA3MTdAZ21haWwuY29tIiwiaWF0IjoxNjU0NjE5OTYwLCJleHAiOjE2NTQ3MDI3NjB9.5l3Xl_M5rTbW_FWW3kqatp_pMHCqikKX_Tjd-Z3h698";
        // const token = await req.headers.authorization.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "トークンがありません" });
        }
        try {
            const decoded = jwt.verify(token, secret_key);
            req.body.email = decoded.email;
            return handler(req, res);
        } catch (err) {
            return res
                .status(401)
                .json({ message: "トークンが正しくないので、ログインしてください" });
        }
    };
};

export default auth;