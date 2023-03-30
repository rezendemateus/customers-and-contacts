import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/errors";
import { IContactRequest, IContactResponse } from "../../interfaces/contacts";
import { returnContactSchema } from "../../schemas/contacts.schemas";

const createContactService = async (
  data: IContactRequest
): Promise<IContactResponse> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.findOneBy({ email: data.email });

  if (findContact) {
    throw new AppError("Client already exists", 404);
  }

  const contact = contactRepository.create(data);
  await contactRepository.save(contact);

  const newClient = await returnContactSchema.validate(contact, {});
  return newClient;
};
export { createContactService };
