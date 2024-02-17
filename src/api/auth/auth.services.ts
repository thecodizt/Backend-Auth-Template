import db from "../../utils/db";
import { hashToken } from "../../utils/jwt";

export const addRefreshTokenToWhitelist = ({
	jti,
	refreshToken,
	userId,
}: {
	jti: string;
	refreshToken: string;
	userId: string;
}) => {
	return db.refreshToken.create({
		data: {
			id: jti,
			hashedToken: hashToken(refreshToken),
			userId,
		},
	});
};

export const findRefreshTokenById = (id: string) => {
	return db.refreshToken.findUnique({
		where: {
			id,
		},
	});
};

export const deleteRefreshToken = (id: string) => {
	return db.refreshToken.update({
		where: {
			id,
		},
		data: {
			revoked: true,
		},
	});
};

export const revokeTokens = (userId: string) => {
    return db.refreshToken.updateMany({
        where: {
            userId,
        },
        data: {
            revoked: true,
        },
    });
}