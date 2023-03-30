import * as yup from "yup";
import { returnClientSchema } from "./clients.schemas";

const contactSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  telephone: yup.string().required(),
  clientId: yup.string().required(),
});

const returnContactSchema = yup.object().shape({
  id: yup.string().uuid(),
  name: yup.string(),
  email: yup.string().email(),
  client: returnClientSchema,
  telephone: yup.string(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
});

const updateContactSchema = yup.object().shape({
  name: yup.string().required().optional(),
  email: yup.string().email().required().optional(),
  telephone: yup.string().required().optional(),
});

const listContactSchema = yup.array(contactSchema);

export {
  contactSchema,
  returnContactSchema,
  listContactSchema,
  updateContactSchema,
};
