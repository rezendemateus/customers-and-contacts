import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/errors";
import { IContactResponse } from "../../interfaces/contacts";
import { returnContactSchema } from "../../schemas/contacts.schemas";

const getContactByIdService = async (id: string): Promise<IContactResponse> => {
  const contact = await AppDataSource.getRepository(Contact)
    .createQueryBuilder("contact")
    .where("contact.id = :id", { id: id })
    .getOne();

  if (!contact) {
    throw new AppError("Contact does not exists!", 404);
  }

  const contactReturn = await returnContactSchema.validate(contact);
  return contactReturn;
};

export { getContactByIdService };
