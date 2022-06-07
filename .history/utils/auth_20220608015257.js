const auth = handler => {
    return async(req, res) => {

        if (req.method === "GET") {
            return handler
        }
    };
};

export default auth;