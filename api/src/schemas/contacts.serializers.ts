import * as yup from "yup";
const contactSchema = yup.object().shape({
  name: yup.string(),
  cpf: yup.string(),
  email: yup.string().email(),
  telephone: yup.string(),
});

const returncontactSchema = yup.object().shape({
  id: yup.string().uuid(),
  name: yup.string(),
  cpf: yup.string(),
  email: yup.string().email(),
  telephone: yup.string(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
});

export { contactSchema, returncontactSchema };
