import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { handleError } from "./errors/errors";
import clientsRoutes from "./routes/clients.routes";

const app: Application = express();

app.use(express.json());
app.use("/clients", clientsRoutes);

app.use(handleError);

export default app;
