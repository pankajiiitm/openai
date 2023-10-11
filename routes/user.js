import express from "express";
import { signup } from "../controllers/users_controller.js";
var router = express.Router();

router.post("/api/signup", signup);



export default router;
