import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#9eadf8",
        margin: "0",
        position: "absolute",
        top: "0",
        width: "100%"
      }}
    >
      <Container maxWidth="xs" align="center">
        <Logo />
        {/* <Typography variant="button" color="initial" m={0}>
          Hola
        </Typography> */}
      </Container>
    </footer>
  );
};

export default Footer;
