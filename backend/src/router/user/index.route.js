import express from "express";
import { index } from "../../app/controllers/user.controller.js";

const router = express.Router();

router.get("/", index);

export default router;