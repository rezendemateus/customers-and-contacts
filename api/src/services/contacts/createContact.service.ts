import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/errors";
import { IContactRequest, IContactResponse } from "../../interfaces/contacts";
import { returnContactSchema } from "../../schemas/contacts.schemas";

const createContactService = async (
  clientId: string,
  data: IContactRequest
): Promise<IContactResponse> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const clientRepository = AppDataSource.getRepository(Client);

  const findContact = await contactRepository.findOneBy({ email: data.email });

  if (findContact) {
    throw new AppError("Client already exists", 404);
  }

  const contact = contactRepository.create(data);

  const client = await clientRepository.findOneBy({ id: clientId });

  if (!client) {
    throw new AppError("Client does not exists!", 404);
  }
  contact.client = client;
  console.log(client);

  await contactRepository.save(contact);

  const newContact = await returnContactSchema.validate(contact);
  return newContact;
};
export { createContactService };
