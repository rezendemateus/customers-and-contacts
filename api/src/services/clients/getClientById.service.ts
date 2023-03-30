import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/errors";
import { IClientResponse } from "../../interfaces/clients";
import { returnClientSchema } from "../../schemas/clients.schemas";

const getClientByIdService = async (id: string): Promise<IClientResponse> => {
  if (!id) {
    throw new AppError("Invalid id!", 400);
  }

  const client = await AppDataSource.getRepository(Client)
    .createQueryBuilder("client")
    .leftJoinAndSelect("client.contacts", "contacts")
    .where("client.id = :id", { id })
    .getOne();

  if (!client) {
    throw new AppError("User does not exists", 404);
  }

  const foundClient = await returnClientSchema.validate(client, {
    stripUnknown: true,
  });

  return foundClient;
};

export { getClientByIdService };
