import { styled } from "@/styles";
import React from "react";

const Button = styled("button", {
  backgroundColor: "$rocketseat",
  color: "White",
  borderRadius: 4,
  border: 0,
  padding: "4px 8px",

  "&:hover": {
    filter: "brightness(0.9)",
  },
});

const Home = () => {
  return <Button>Enviar</Button>;
};

export default Home;
