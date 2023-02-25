import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: black;
  color: white;
`;

export const FooterNav = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  max-width: 1110px;
  padding-top: 75px;
  padding-bottom: 36px;
  ul {
    display: flex;
    justify-content:space-between;
    width:427px;
    li {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 13px;
      line-height: 25px;
      letter-spacing: 2px;
    }
  }
`;
export const FooterContent = styled.div`
  margin: 0 auto;
  margin-bottom:56px;
  max-width: 1110px;
  display:flex;
  justify-content: space-between;
  align-items:flex-end;
  p{
      width:540px;
      opacity:0.5;
  }
`;
export const SocialMediaContainer = styled.div`
  display:flex;
  justify-content:space-between;
  width:104px;
`

export const Copyright = styled.div`
  margin:0 auto;
  max-width:1110px;
  padding-bottom:48px;
  opacity:0.5;
  font-weight: 700;
font-size: 15px;
line-height: 25px;
`;
