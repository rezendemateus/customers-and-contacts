import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/errors";
import { IClientRequest, IClientResponse } from "../../interfaces/clients";
import { returnClientSchema } from "../../schemas/clients.serializers";

const createClientService = async (
  data: IClientRequest
): Promise<IClientResponse> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const findClient = await clientRepository.findOneBy({
    email: data.email,
    cpf: data.cpf,
  });

  if (findClient) {
    throw new AppError("User already exists!", 409);
  }

  const client: Client = clientRepository.create(data);
  await clientRepository.save(client);

  const newClient = await returnClientSchema.validate(client, {
    stripUnknown: true,
  });

  return newClient!;
};

export { createClientService };
