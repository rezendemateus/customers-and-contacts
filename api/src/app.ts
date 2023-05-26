import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { handleError } from "./errors/errors";
import clientsRoutes from "./routes/clients.routes";
import { contactsRoutes } from "./routes/contacts.routes";
import { sessionRoutes } from "./routes/session.routes";

const app: Application = express();

app.use(express.json());
app.use("/clients", clientsRoutes);
app.use("/contacts", contactsRoutes);
app.use("/login", sessionRoutes);

app.use(handleError);

export default app;
