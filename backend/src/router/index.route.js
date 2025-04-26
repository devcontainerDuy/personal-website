import userRoutes from "./user/index.route.js";

const route = (app) => {
    app.get("/", (req, res) => {
        res.send("Hello World!");
    });

    app.get("/api", (req, res) => {
        res.json({ message: "API is working!" });
    });

    app.use("/api/users", userRoutes);
};

export default route;
