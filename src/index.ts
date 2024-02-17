import express, { Express, Request, Response, Application } from "express";
import cors from "cors";
import helmet from "helmet";

import { PORT } from "./utils/constants";
import api from "./api";

import { notFound, errorHandler } from "./middlewares";

const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	res.send("Welcome to Express & TypeScript Server");
});

app.use("/api/v1", api);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
