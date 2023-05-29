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
import { ensureOwnerMiddleware } from "../middlewares/ensureOwner.middleware,";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const contactsRoutes = Router();

contactsRoutes.get("", getContactsController);
contactsRoutes.get("/:id", getContactByIdController);
contactsRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(contactSchema),
  createContactController
);
contactsRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureOwnerMiddleware,
  ensureDataIsValidMiddleware(updateContactSchema),
  updateContactController
);
contactsRoutes.delete("/:id", deleteContactController);
export { contactsRoutes };
