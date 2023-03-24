import express from "express";
import { signup } from "../../adapter/signup";
const router = express.Router();

// define the home page route
router.post("/", signup);

export default router;
