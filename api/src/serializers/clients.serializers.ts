import { returncontactSchema } from "./contacts.serializers";
import * as yup from "yup";

const clientSchema = yup.object().shape({
  name: yup.string().required(),
  cpf: yup.string().required(),
  email: yup.string().email().required(),
  telephone: yup.string().required(),
  password: yup.string().required(),
});

const returnClientSchema = yup.object().shape({
  id: yup.string(),
  name: yup.string(),
  cpf: yup.string(),
  email: yup.string().email(),
  telephone: yup.string(),
  contacts: yup.array(returncontactSchema).optional().nullable(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
});

export { clientSchema, returnClientSchema };