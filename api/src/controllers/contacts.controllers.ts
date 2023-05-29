import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";
import { getContactByIdService } from "../services/contacts/getContactById.service";
import { getContactsService } from "../services/contacts/getContacts.service";
import { updateContactService } from "../services/contacts/updateContact.service";

const createContactController = async (req: Request, res: Response) => {
  const newContact = await createContactService(req.user.id, req.body);
  return res.status(201).json(newContact);
};

const getContactsController = async (req: Request, res: Response) => {
  const contacts = await getContactsService();
  return res.status(200).json(contacts);
};

const getContactByIdController = async (req: Request, res: Response) => {
  const contact = await getContactByIdService(req.params.id);
  return res.status(200).json(contact);
};

const updateContactController = async (req: Request, res: Response) => {
  const contact = await updateContactService(req.params.id, req.body);
  return res.status(200).json(contact);
};

const deleteContactController = async (req: Request, res: Response) => {
  await deleteContactService(req.params.id);
  return res.status(200).json();
};

export {
  createContactController,
  getContactsController,
  getContactByIdController,
  updateContactController,
  deleteContactController,
};
