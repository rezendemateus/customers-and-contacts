import { Box, Button, Container, InputLabel, TextField } from "@mui/material";
import { useRouter } from "next/router";

const Homepage = () => {
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
        >
          <InputLabel>Email</InputLabel>
          <TextField
            placeholder="example@email.com"
            sx={{
              width: "100%",
            }}
          />

          <InputLabel>Password</InputLabel>
          <TextField
            type="password"
            placeholder=".........."
            sx={{
              width: "100%",
            }}
          ></TextField>
          <Box
            className="submit"
            sx={{
              width: "100%",
              textAlign: "center",
              marginTop: "15px",
            }}
          >
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
            gap: "8px",
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
