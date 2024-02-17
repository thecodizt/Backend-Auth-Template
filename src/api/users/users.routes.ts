import { Router } from "express";
import { isAuthenticated } from "../../middlewares";
import { getProfile } from "./users.controllers";

const router = Router();

router.get("/profile", isAuthenticated, getProfile);

export default router;