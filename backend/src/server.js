import express from "express";
import route from "./router/index.route.js";
import connectDatabase from "./config/database/index.js";
import createAdminPanel from "./config/providers/createAdminPanel.js";

const app = express();
const port = 8080;

// AdminJS
const { admin, adminRouter } = createAdminPanel();
app.use(admin.options.rootPath, adminRouter);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect database
connectDatabase();

// Routing API
route(app);

app.listen(port, () => {
    console.log(`🟢 Example app listening on http://localhost:${port}`);
    console.log(`AdminJS started on http://localhost:${port}${admin.options.rootPath}`);
});
