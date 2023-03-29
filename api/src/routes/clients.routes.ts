import { Router } from "express";
import { createClientsController } from "../controllers/clients.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { clientSchema } from "../serializers/clients.serializers";

const clientsRoutes = Router();

clientsRoutes.post(
  "",
  ensureDataIsValidMiddleware(clientSchema),
  createClientsController
);

export default clientsRoutes;
