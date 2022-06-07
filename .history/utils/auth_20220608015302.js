const auth = handler => {
    return async(req, res) => {

        if (req.method === "GET") {
            return handler(req, res)
        }
    };
};

export default auth;