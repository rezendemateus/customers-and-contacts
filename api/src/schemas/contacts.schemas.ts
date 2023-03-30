import * as yup from "yup";
import { returnClientSchema } from "./clients.schemas";
const contactSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  telephone: yup.string().required(),
});

const returnContactSchema = yup.object().shape({
  id: yup.string().uuid(),
  name: yup.string(),
  email: yup.string().email(),
  contact: returnClientSchema,
  telephone: yup.string(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
});

const listContactSchema = yup.array(contactSchema);

export { contactSchema, returnContactSchema, listContactSchema };
