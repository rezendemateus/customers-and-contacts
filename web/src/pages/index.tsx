import { LoginContext } from "@/contexts/login";
import { useForm } from "react-hook-form";
import { ILoginRequest } from "@/interfaces/login";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Container, InputLabel, TextField } from "@mui/material";
import { useContext } from "react";
import { loginSerializer } from "@/serializers/login.serializer";
import Router from "next/router";
import { ClientContext } from "@/contexts/client";

const Homepage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginRequest>({
    resolver: yupResolver(loginSerializer),
  });

  const { login } = useContext(LoginContext);

  const { token } = useContext(ClientContext);

  if (token) {
    Router.push("/client");
  }
  return (
    <Container
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "var(--blue-1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--grey-1)",
          fontFamily: "Roboto",
          padding: "40px 20px",
          borderRadius: "10px",
          width: "50%",
          minWidth: "370px",
          gap: "15px",
        }}
      >
        <h1 style={{ color: "var(--blue-1)", marginBottom: "50px" }}>Login</h1>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
            width: "90%",
          }}
          onSubmit={handleSubmit(login)}
        >
          <InputLabel>Email</InputLabel>
          <TextField
            placeholder="example@email.com"
            sx={{
              width: "100%",
            }}
            {...register("email")}
          />

          <InputLabel>Password</InputLabel>
          <TextField
            type="password"
            placeholder=".........."
            sx={{
              width: "100%",
            }}
            {...register("password")}
          ></TextField>
          <Box
            className="submit"
            sx={{
              width: "100%",
              marginTop: "15px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "15px",
            }}
          >
            {errors.email?.message || errors.password?.message ? (
              <span
                style={{
                  color: "red",
                  height: "10px",
                  fontSize: "0.75rem",
                  marginTop: "-10px",
                }}
              >
                Please check that the information provided is correct.
              </span>
            ) : null}
            <Button
              type="submit"
              sx={{
                backgroundColor: "var(--blue-1)",
                color: "var(--grey-1)",
                width: "70%",
                padding: "10px 0",
                ":hover": {
                  backgroundColor: "var(--blue-2)",
                  transform: "scale(1.02)",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </form>
        <Box
          className="registerArea"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
            width: "90%",
          }}
        >
          <span style={{ color: "var(--blue-1)" }}>Not registered?</span>
          <Button
            type="button"
            sx={{
              backgroundColor: "var(--grey-2)",
              color: "var(--white)",
              width: "70%",
              padding: "10px 0",
              ":hover": {
                backgroundColor: "var(--blue-2)",
                transform: "scale(1.02)",
              },
            }}
            onClick={() => (window.location.pathname = "/client/register")}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default Homepage;
