import * as yup from "yup";

const loginSerializer = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export { loginSerializer };
