import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  getClientbyIdController,
  getClientsController,
  updateClientcontroller,
} from "../controllers/clients.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { clientSchema, updateClientSchema } from "../schemas/clients.schemas";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import { ensurePermission } from "../middlewares/ensurePermission.middleware";

const clientsRoutes = Router();

clientsRoutes.get("", ensureAuthMiddleware, getClientsController);
clientsRoutes.get("/:id", ensureAuthMiddleware, getClientbyIdController);
clientsRoutes.post(
  "",
  ensureDataIsValidMiddleware(clientSchema),
  createClientController
);
clientsRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensurePermission,
  ensureDataIsValidMiddleware(updateClientSchema),
  updateClientcontroller
);
clientsRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensurePermission,
  deleteClientController
);

export default clientsRoutes;
