import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { listContactSchema } from "../../schemas/contacts.schemas";

const getContactsService = async () => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contacts = await contactRepository.find({
    relations: { client: true },
  });
  const contactsList = await listContactSchema.validate(contacts);

  return contactsList;
};

export { getContactsService };
