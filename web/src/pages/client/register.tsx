import Header from "@/components/Header";
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { regiterUserSerializer } from "@/serializers/client.serializers";
import { IClientRequest } from "@/interfaces/clients";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClientRequest>({
    resolver: yupResolver(regiterUserSerializer),
  });

  const onSubmit = async (data: any) => {
    console.log(data);
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
            gap: "36px",
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
            placeholder="Cpf"
            required
          />
          <span
            style={{
              display: "inline",
              height: "auto",
              color: "black",
              position: "absolute",
              marginTop: "20px",
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
            placeholder="telephone"
            required
          />
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
          <Button
            type="submit"
            onClick={() => console.log("teste")}
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
