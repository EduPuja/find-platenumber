import { Router } from "express";
import { loginUser } from "../controllers/auth.controller"; // tu controller

const router = Router();

// POST /api/login
router.post("/api/login", loginUser);

export default router;
