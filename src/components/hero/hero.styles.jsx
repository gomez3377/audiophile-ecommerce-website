import styled from "styled-components";
import { homeDesktopImages } from "../../assets/home/home.images";

const { desktopHeroImg } = homeDesktopImages;

export const HeroContainer = styled.div`
  background-image: url(${desktopHeroImg});
  background-size: cover;
  height: 729px;
  color: white;
`;

export const HeaderContent = styled.div`
  width: 398px;
  padding: 225px 0 158px;
  margin-left: 165px;
  margin-right: auto;
  .overline {
    color: white;
    opacity: 0.5;
  }
  h1{
      margin-top: 24px;
      margin-bottom: 24px;
  }
  p{
      width: 349px;
      margin-bottom:40px;
      opacity:0.75;
  }
`;
