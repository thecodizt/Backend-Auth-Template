import bcrypt from "bcrypt";
import db from "../../utils/db";

export const findUserByEmail = (email: string) => {
	return db.user.findUnique({
		where: {
			email,
		},
	});
};

export const createUserByEmailAndPassword = ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	const hashedPassword = bcrypt.hashSync(password, 12);
	return db.user.create({
		data: {
			email,
			password: hashedPassword,
		},
	});
};

export const findUserById = (id: string) => {
	return db.user.findUnique({
		where: {
			id,
		},
	});
};
