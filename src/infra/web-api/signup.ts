import express from "express";
import * as adapter from "../../adapter/signup";
const router = express.Router();

// define the home page route
router.post("/", adapter.signup);

export default router;
