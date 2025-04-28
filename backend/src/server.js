import express from "express";
import cors from "cors";
// import dotenv from "dotenv";
import route from "./routes/index.route.js";
import connectDatabase from "./config/database/index.js";
import viewEngine from "./config/providers/viewEngine.js";


const app = express();
const port = 8080;

// set view engine
viewEngine(app, express);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect database
connectDatabase();

// Routing API
route(app);

app.listen(port, () => {
  console.log(`🟢 Example app listening on http://localhost:${port}`);
});
