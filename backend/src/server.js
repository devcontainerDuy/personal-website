import express from "express";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
// import dotenv from "dotenv";
import route from "./router/index.route.js";
import connectDatabase from "./config/database/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8080;

// Middleware phục vụ tệp tĩnh
app.use(express.static(path.join(__dirname, 'public')));

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
});
