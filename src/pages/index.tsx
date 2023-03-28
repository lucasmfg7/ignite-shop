import { styled } from "@/styles";
import React from "react";

const Button = styled("button", {
  backgroundColor: "$green300",
  borderRadius: 4,
  border: 0,
  padding: "4px 8px",

  "&:hover": {
    filter: "brightness(0.8)",
  },
});

const Home = () => {
  return <Button>Enviar</Button>;
};

export default Home;
