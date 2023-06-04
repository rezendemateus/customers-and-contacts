import Header from "@/components/Header";
import { Button, Container, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { regiterUserSerializer } from "@/serializers/client.serializers";
import { IClientRequest } from "@/interfaces/clients";
import { toast } from "react-toastify";
import api from "@/services/api";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClientRequest>({
    resolver: yupResolver(regiterUserSerializer),
  });

  const onSubmit = async (data: any) => {
    try {
      await api.post("/clients", data);
      window.location.pathname = "";
      return toast.success("Registered!");
    } catch (error: any) {
      return toast.error(error);
    }
  };

  return (
    <>
      <Header text={"Register"} />
      <Container
        sx={{
          backgroundColor: "rgb(6, 12, 109)",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            width: "90%",
            maxWidth: "480px",
            height: "auto",
            backgroundColor: "rgb(241, 241, 241)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            padding: "40px 0",
            borderRadius: "14px",
          }}
        >
          <TextField
            {...register("name")}
            variant="outlined"
            sx={{
              width: "90%",
              height: "60px",
              padding: "4px 10px",
              fontSize: "1.5rem",
              color: "rgb(6,12,109)",
              fontWeight: "500",
            }}
            type="text"
            placeholder="Complet Name"
            required
          />
          <TextField
            {...register("cpf")}
            sx={{
              width: "90%",
              height: "60px",
              padding: "4px 10px",
              fontSize: "1.5rem",
              color: "rgb(6,12,109)",
              fontWeight: "500",
            }}
            type="text"
            placeholder="Cpf (numbers only)"
            required
          />
          <span
            style={{
              display: "inline",
              height: "0.86rem",
              color: "black",
              marginTop: "-20px",
              fontSize: "0.85rem",
              fontFamily: "Roboto",
              color: "red",
            }}
          >
            {errors.cpf?.message}
          </span>
          <TextField
            {...register("email")}
            sx={{
              width: "90%",
              height: "60px",
              padding: "4px 10px",
              fontSize: "1.5rem",
              color: "rgb(6,12,109)",
              fontWeight: "500",
            }}
            type="text"
            placeholder="Email"
            required
          />
          <span
            style={{
              display: "inline",
              height: "0.86rem",
              color: "black",
              marginTop: "-20px",
              fontSize: "0.85rem",
              fontFamily: "Roboto",
              color: "red",
            }}
          >
            {errors.email?.message}
          </span>
          <TextField
            {...register("telephone")}
            sx={{
              width: "90%",
              height: "60px",
              padding: "4px 10px",
              fontSize: "1.5rem",
              color: "rgb(6,12,109)",
              fontWeight: "500",
            }}
            type="text"
            placeholder="Telephone (numbers only)"
            required
          />
          <span
            style={{
              display: "inline",
              height: "0.86rem",
              color: "black",
              marginTop: "-20px",
              fontSize: "0.85rem",
              fontFamily: "Roboto",
              color: "red",
            }}
          >
            {errors.telephone?.message}
          </span>
          <TextField
            {...register("password")}
            sx={{
              width: "90%",
              height: "60px",
              padding: "4px 10px",
              fontSize: "1.5rem",
              color: "rgb(6,12,109)",
              fontWeight: "500",
            }}
            type="password"
            placeholder="Password"
            required
          />
          <span
            style={{
              display: "inline",
              height: "0.86rem",
              color: "black",
              marginTop: "-20px",
              fontSize: "0.85rem",
              fontFamily: "Roboto",
              color: "red",
            }}
          >
            {errors.password?.message}
          </span>
          <Button
            type="submit"
            sx={{
              backgroundColor: "rgb(6,12,109)",
              color: "rgb(241, 241, 241)",
              padding: "10px 40px",
              "&:hover": {
                backgroundColor: "rgb(6,12,109, 0.9)",
                transform: " scale(1.02) ",
              },
            }}
          >
            Register
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Register;
