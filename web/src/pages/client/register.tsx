import Header from "@/components/Header";
import { Container, FormControl, Input } from "@mui/material";
const Register = () => {
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
        <FormControl
          onSubmit={() => {}}
          sx={{
            width: "90%",
            height: "auto",
            backgroundColor: "rgb(241, 241, 241)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "18px",
            padding: "20px 0",
            borderRadius: "14px",
          }}
        >
          <Input
            sx={{
              width: "90%",
              height: "40px",
              padding: "4px 10px",
              fontSize: "1.5rem",
              color: "rgb(6,12,109)",
              fontWeight: "500",
            }}
            type="text"
            placeholder="Name"
          />
          <Input
            sx={{
              width: "90%",
              height: "40px",
              padding: "4px 10px",
              fontSize: "1.5rem",
              color: "rgb(6,12,109)",
              fontWeight: "500",
            }}
            type="text"
            placeholder="Cpf"
          />
          <Input
            sx={{
              width: "90%",
              height: "40px",
              padding: "4px 10px",
              fontSize: "1.5rem",
              color: "rgb(6,12,109)",
              fontWeight: "500",
            }}
            type="text"
            placeholder="Email"
          />
          <Input
            sx={{
              width: "90%",
              height: "40px",
              padding: "4px 10px",
              fontSize: "1.5rem",
              color: "rgb(6,12,109)",
              fontWeight: "500",
            }}
            type="text"
            placeholder="telephone"
          />
          <Input
            sx={{
              width: "90%",
              height: "40px",
              padding: "4px 10px",
              fontSize: "1.5rem",
              color: "rgb(6,12,109)",
              fontWeight: "500",
            }}
            type="password"
            placeholder="Password"
          />
        </FormControl>
      </Container>
    </>
  );
};

export default Register;
