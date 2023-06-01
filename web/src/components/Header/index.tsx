import { AppBar } from "@mui/material";
import { ReactElement } from "react";
import Typography from "@mui/material/Typography";
import { IHeaderProps } from "@/interfaces/header";

const Header = ({ text }: IHeaderProps) => {
  return (
    <AppBar
      sx={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60px",
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
      </Typography>
    </AppBar>
  );
};

export default Header;
