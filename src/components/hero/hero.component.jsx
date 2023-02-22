import React from "react";
import Button from "../button/button.component";
import { HeroContainer } from "./hero.styles";

const Hero = () => {
  return (
    <HeroContainer>
      <span>New Product</span>
      <h1>XX99 Mark II Headphones</h1>
      <p>
        Experience natural, lifelike audio and exceptional build quality made
        for the pasionate music enthusiast
      </p>
      <Button>See Product</Button>
    </HeroContainer>
  );
};

export default Hero;
