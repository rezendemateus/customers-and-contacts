import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/errors";

const deleteClientService = async (id: string): Promise<{}> => {
  if (!id) {
    throw new AppError("Invalid id!", 400);
  }

  const clientRepository = AppDataSource.getRepository(Client);
  const client = await clientRepository.findOneBy({ id: id, isActive: true });

  if (!client) {
    throw new AppError("User does not exists!", 404);
  }

  client.isActive = false;
  await clientRepository.save(client);

  return {};
};

export { deleteClientService };
