import { AppBar, Button } from "@mui/material";
import { useContext } from "react";
import Typography from "@mui/material/Typography";
import { IHeaderProps } from "@/interfaces/header";
import { ClientContext } from "@/contexts/client";
import { toast } from "react-toastify";

const Header = ({ text }: IHeaderProps) => {
  const { token } = useContext(ClientContext);

  return (
    <AppBar
      sx={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60px",
        position: "relative",
      }}
    >
      <Typography
        sx={{
          color: "rgb(6, 12, 109)",
          fontSize: "1.75rem",
          fontWeight: "700",
        }}
      >
        {text}
        {token ? (
          <Button
            sx={{
              position: "absolute",
              right: "40px",
              backgroundColor: "var(--blue-1)",
              color: "var(--grey-1)",
            }}
            onClick={() => {
              localStorage.clear();
              location.reload();
              toast.success("Logged out!");
            }}
          >
            Sair
          </Button>
        ) : null}
      </Typography>
    </AppBar>
  );
};

export default Header;
