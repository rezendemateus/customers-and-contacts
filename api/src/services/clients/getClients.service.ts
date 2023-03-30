import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { IClientResponse } from "../../interfaces/clients";
import { listClientsSchema } from "../../schemas/clients.schemas";

const getClientsService = async (): Promise<IClientResponse[]> => {
  const clientRepository = AppDataSource.getRepository(Client);
  const clients = await clientRepository.find({
    where: { isActive: true },
    relations: { contacts: true },
  });

  const foundClients = await listClientsSchema.validate(clients, {
    stripUnknown: true,
  });
  return foundClients;
};

export { getClientsService };
