import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/errors";
import {
  IContactRequest,
  IContactResponse,
  IContactUpdate,
} from "../../interfaces/contacts";
import {
  returnContactSchema,
  updateContactSchema,
} from "../../schemas/contacts.schemas";

const updateContactService = async (
  id: string,
  payload: IContactUpdate
): Promise<IContactResponse> => {
  if (!id) {
    throw new AppError("Invalid id!", 400);
  }

  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({ id: id });

  if (!contact) {
    throw new AppError("Contact does not exists!", 404);
  }

  payload = await updateContactSchema.validate(payload);

  await contactRepository.update(id, {
    name: payload.name ? payload.name : contact.name,
    telephone: payload.telephone ? payload.telephone : contact.telephone,
    email: payload.email ? payload.email : contact.email,
  });

  const updatedContact = await returnContactSchema.validate(
    await contactRepository.findOneBy({ id }),
    { stripUnknown: true }
  );
  return updatedContact;
};

export { updateContactService };
