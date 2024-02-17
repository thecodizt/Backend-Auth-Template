import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 8000;

export const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'access-secret'

export const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'refresh-secret'