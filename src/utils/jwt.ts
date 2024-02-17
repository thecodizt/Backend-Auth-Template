import jwt from "jsonwebtoken";
import crypto from "crypto";

import { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } from "./constants";
import { Response } from "express";

export const generateAccessToken = (userId: string) => {
	return jwt.sign({ userId }, JWT_ACCESS_SECRET, { expiresIn: "15m" });
};

export const generateRefreshToken = (userId: string, jti: string) => {
	return jwt.sign(
		{
			userId,
			jti,
		},
		JWT_REFRESH_SECRET,
		{
			expiresIn: "8h",
		}
	);
};

export const generateTokens = (userId: string, jti: string) => {
	const accessToken = generateAccessToken(userId);
	const refreshToken = generateRefreshToken(userId, jti);

	return {
		accessToken,
		refreshToken,
	};
};

export const hashToken = (token: string) => {
	return crypto.createHash("sha512").update(token).digest("hex");
};

export const sendRefreshToken = (res: Response, token: string) => {
	res.cookie("refresh_token", token, {
		httpOnly: true,
		sameSite: true,
		path: "/api/v1/auth",
	});
};
