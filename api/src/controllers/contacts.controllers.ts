import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContact.service";
import { getContactsService } from "../services/contacts/getContacts.service";

const createContactController = async (req: Request, res: Response) => {
  const newContact = await createContactService(req.body);
  return res.status(201).json(newContact);
};

const getContactsController = async (req: Request, res: Response) => {
  const contacts = await getContactsService();
  return res.status(200).json(contacts);
};

export { createContactController, getContactsController };
