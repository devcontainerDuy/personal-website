import express from "express";
import route from "./router/index.route.js";

const app = express();
const port = 8080;

route(app);

app.listen(port, () => {
    console.log(`🟢 Example app listening on http://localhost:${port}`);
});
