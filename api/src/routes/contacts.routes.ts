import { Router } from "express";
import {
  createContactController,
  getContactsController,
} from "../controllers/contacts.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { clientSchema } from "../schemas/clients.schemas";
import { contactSchema } from "../schemas/contacts.schemas";

const contactsRoutes = Router();

contactsRoutes.post(
  "",
  ensureDataIsValidMiddleware(contactSchema),
  createContactController
);
contactsRoutes.get("", getContactsController);

export { contactsRoutes };
