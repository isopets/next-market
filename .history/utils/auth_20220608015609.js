const auth = handler => {
    return async(req, res) => {
        if (req.method === "GET") {
            return handler(req, res);
        }

        const token = awaitreq.handlers.auth
    };
};

export default auth;