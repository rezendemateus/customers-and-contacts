import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/errors";
import { IClientUpdate } from "../../interfaces/clients";
import {
  returnClientSchema,
  updateClientSchema,
} from "../../schemas/clients.schemas";

const updateClientService = async (id: string, payload: IClientUpdate) => {
  if (!id) {
    throw new AppError("Invalid id!", 400);
  }

  const clientRepository = AppDataSource.getRepository(Client);
  const client = await clientRepository.findOneBy({ id });

  if (!client) {
    throw new AppError("Client does not exists!", 404);
  }

  payload = await updateClientSchema.validate(payload, {
    stripUnknown: true,
  });

  await clientRepository.update(id, {
    name: payload.name ? payload.name : client.name,
    cpf: payload.cpf ? payload.cpf : client.cpf,
    email: payload.email ? payload.email : client.email,
    telephone: payload.telephone ? payload.telephone : client.telephone,
  });

  const updatedClient = await returnClientSchema.validate(
    await clientRepository.findOneBy({ id }),
    { stripUnknown: true }
  );

  return updatedClient;
};

export { updateClientService };
