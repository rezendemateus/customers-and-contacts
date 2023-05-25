import { Box, Container } from "@mui/material";

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
          width: "60%",
          height: "80%",
          backgroundColor: "var(--grey-1)",
        }}
      ></Box>
    </Container>
  );
};
export default Homepage;
