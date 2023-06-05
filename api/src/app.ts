import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { handleError } from "./errors/errors";
import clientsRoutes from "./routes/clients.routes";
import { contactsRoutes } from "./routes/contacts.routes";
import { sessionRoutes } from "./routes/session.routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const app: Application = express();

app.use(express.json());
app.use("/clients", clientsRoutes);
app.use("/contacts", contactsRoutes);
app.use("/login", sessionRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(handleError);

export default app;
