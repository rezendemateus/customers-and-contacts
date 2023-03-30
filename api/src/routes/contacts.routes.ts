import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  updateContactController,
} from "../controllers/contacts.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  contactSchema,
  updateContactSchema,
} from "../schemas/contacts.schemas";

const contactsRoutes = Router();

contactsRoutes.get("", getContactsController);
contactsRoutes.get("/:id", getContactByIdController);
contactsRoutes.post(
  "",
  ensureDataIsValidMiddleware(contactSchema),
  createContactController
);
contactsRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(updateContactSchema),
  updateContactController
);
contactsRoutes.delete("/:id", deleteContactController);
export { contactsRoutes };
