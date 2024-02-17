import { NextFunction, Request, Response } from "express";
import { findUserById } from "./users.services";

interface JWTPayload {
	userId: string;
	jti: string;
}

export const getProfile = async (
	req: Request & { payload?: JWTPayload },
	res: Response,
	next: NextFunction
) => {
	try {
		const { userId } = req.payload as JWTPayload;
		const user = await findUserById(userId);

		if (!user) {
			res.status(404);
			throw new Error("User not found");
		}

		res.json(user);
	} catch (err) {
		next(err);
	}
};
