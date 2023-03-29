import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/errors";
import { IClientResponse } from "../../interfaces/clients";
import { returnClientSchema } from "../../schemas/clients.serializers";

const getClientByIdService = async (id: string): Promise<IClientResponse> => {
  if (!id) {
    throw new AppError("Invalid id!", 400);
  }

  const clientRepository = AppDataSource.getRepository(Client);
  const client = await clientRepository.findOneBy({ id });

  if (!client || !client.isActive) {
    throw new AppError("User does not exists", 404);
  }

  const foundClient = await returnClientSchema.validate(client);

  return foundClient;
};

export { getClientByIdService };
