const route = (app) => {
    app.get("/", (req, res) => {
        res.send("Hello World!");
    });

    app.get("/api", (req, res) => {
        res.json({ message: "API is working!" });
    });
};

export default route;
