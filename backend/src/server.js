import express from "express";
import cors from "cors";
import route from "./router/index.route.js";
import connectDatabase from "./config/database/index.js";

const app = express();
const port = 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect database
connectDatabase();

// Views engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Routing API
route(app);

app.listen(port, () => {
  console.log(`🟢 Example app listening on http://localhost:${port}`);
  console.log(
    `AdminJS started on http://localhost:${port}${admin.options.rootPath}`
  );
});
