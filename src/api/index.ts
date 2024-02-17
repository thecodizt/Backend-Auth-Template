import { Router } from "express";

import authRoutes from "./auth/auth.routes";
import usersRoutes from "./users/users.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", usersRoutes);

export default router;