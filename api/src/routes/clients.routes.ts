import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  getClientbyIdController,
  getClientsController,
  updateClientcontroller,
} from "../controllers/clients.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  clientSchema,
  updateClientSchema,
} from "../schemas/clients.serializers";

const clientsRoutes = Router();

clientsRoutes.get("", getClientsController);
clientsRoutes.get("/:id", getClientbyIdController);
clientsRoutes.post(
  "",
  ensureDataIsValidMiddleware(clientSchema),
  createClientController
);
clientsRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(updateClientSchema),
  updateClientcontroller
);
clientsRoutes.delete("/:id", deleteClientController);

export default clientsRoutes;
