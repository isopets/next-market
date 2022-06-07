const auth = handler => {
    return async(req, res) => {
        if (req.method === "GET") {
            return handler(req, res);
        }

        const token = await req.headers.authorization.split(" ")[1];

        if (!token)
    };
};

export default auth;