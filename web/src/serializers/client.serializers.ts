import * as yup from "yup";

const regiterUserSerializer = yup.object().shape({
  name: yup.string().required(),
  cpf: yup
    .string()
    .min(11, "Only numbers, 11 digits!")
    .max(11, "Only numbers, 11 digits!")
    .required(),
  email: yup.string().required().email("Invalid email!"),
  telephone: yup.string().required(),
  password: yup.string().required().min(8, "Min. 8 characters!"),
});

const updateClientSerializer = yup.object().shape({
  name: yup.string().optional(),
  cpf: yup.string().optional(),
  email: yup.string().email().optional(),
  telephone: yup.string().optional(),
});

export { regiterUserSerializer, updateClientSerializer };
