import { Request, Response } from "express";
import { createClientsService } from "../services/clients/createClients.services";

const createClientsController = async (req: Request, res: Response) => {
  const newUser = await createClientsService(req.body);
  return res.status(201).json(newUser);
};

export { createClientsController };
