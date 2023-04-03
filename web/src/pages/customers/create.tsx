import ButtonSubmit from "@/components/ButtonSubmit";
import Header from "@/components/Header";
import { NextPage } from "next";
import styled from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ICustomerRequest } from "@/types";
import api from "@/services/api";
import { toast } from "react-toastify";

const Create: NextPage<void> = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required(),
    cpf: yup.number().required().max(11),
    email: yup.string().email().required(),
    telephone: yup.number().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICustomerRequest>({
    resolver: yupResolver(formSchema),
  });

  const onFormSubmit = async (formData: ICustomerRequest) => {
    try {
      await api.post("/customers");
      toast.success("success!");
      window.location.href = "/customers";
    } catch (error) {
      toast.error("ops");
    }
  };

  return (
    <StyledCreate onSubmit={handleSubmit(onFormSubmit)}>
      <Header>New Customer</Header>
      <form className="new_user_form">
        <input
          required
          type="text"
          placeholder="complet name"
          {...register("name")}
        />
        <input
          required
          type="text"
          placeholder="cpf, only numbers"
          {...register("cpf")}
        />
        <input
          required
          type="email"
          placeholder="email"
          {...register("email")}
        />
        <input
          required
          type="text"
          placeholder="telephone, only numbers"
          {...register("telephone")}
        />
        <input
          required
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <ButtonSubmit type="submit" className="create_button">
          Create
        </ButtonSubmit>
      </form>
    </StyledCreate>
  );
};

const StyledCreate = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  .new_user_form {
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    display: flex;
    gap: 15px;
    border: 2px solid var(--blue-2);
    border-radius: 15px;
    padding: 15px 0;

    input {
      width: 65%;
      height: 40px;
      border: 1px solid var(--blue-2);
      border-radius: 15px;
      padding: 0 10px;

      ::placeholder {
        color: var(--light-gray);
      }

      :active {
        border-color: blue;
      }
    }
  }
`;

export default Create;
