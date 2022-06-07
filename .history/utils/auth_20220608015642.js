const auth = handler => {
    return async(req, res) => {
        if (req.method === "GET") {
            return handler(req, res);
        }

        const token = await req.hendlers.authorization.split(" ")[1];
    };
};

export default auth;