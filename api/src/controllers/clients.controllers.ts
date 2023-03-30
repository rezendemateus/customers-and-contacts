import { Request, Response } from "express";
import { createClientService } from "../services/clients/createClient.service";
import { deleteClientService } from "../services/clients/deleteClient.service";
import { getClientByIdService } from "../services/clients/getClientById.service";
import { getClientsService } from "../services/clients/getClients.service";
import { updateClientService } from "../services/clients/updateClient.service";

const createClientController = async (req: Request, res: Response) => {
  const newUser = await createClientService(req.body);
  return res.status(201).json(newUser);
};

const updateClientcontroller = async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;

  const updatedUser = await updateClientService(id, payload);
  return res.status(200).json(updatedUser);
};

const getClientbyIdController = async (req: Request, res: Response) => {
  const client = await getClientByIdService(req.params.id);
  return res.status(200).json(client);
};

const getClientsController = async (req: Request, res: Response) => {
  const clients = await getClientsService();
  return res.status(200).json(clients);
};

const deleteClientController = async (req: Request, res: Response) => {
  await deleteClientService(req.params.id);
  return res.status(200).json();
};

export {
  createClientController,
  updateClientcontroller,
  getClientbyIdController,
  getClientsController,
  deleteClientController,
};
