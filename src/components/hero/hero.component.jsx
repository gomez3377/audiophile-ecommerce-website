import React from "react";
import Button from "../button/button.component";
import { HeaderContent, HeroContainer } from "./hero.styles";

const Hero = () => {
  return (
    <HeroContainer>
      <HeaderContent>

      <span className="overline">New Product</span>
      <h1>XX99 Mark II Headphones</h1>
      <p>
        Experience natural, lifelike audio and exceptional build quality made
        for the pasionate music enthusiast
      </p>
      <Button>See Product</Button>
      </HeaderContent>
    </HeroContainer>
  );
};

export default Hero;
