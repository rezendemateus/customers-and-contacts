import Condition from "yup/lib/Condition";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/errors";

const deleteContactService = async (id: string): Promise<{}> => {
  if (!id) {
    throw new AppError("Invalid id!", 400);
  }

  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({ id });

  if (!contact) {
    throw new AppError("Contact does not exist!", 404);
  }

  contactRepository.remove(contact);
  return;
};

export { deleteContactService };
