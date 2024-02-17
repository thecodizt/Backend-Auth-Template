import { Router } from "express";
import {
	refreshToken,
	revokeRefreshTokens,
	signin,
	signup,
} from "./auth.controllers";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/refreshtoken", refreshToken);
router.post("/revokerefreshtokens", revokeRefreshTokens);

export default router;
