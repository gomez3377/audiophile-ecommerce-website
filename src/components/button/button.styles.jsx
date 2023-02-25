import styled from "styled-components";

export const BaseButton = styled.button`
cursor:pointer;
border:none;
  max-width: 160px;
  text-transform: uppercase;
  text-align: center;
  padding: 15px;
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 700;
`;

export const ButtonOne = styled(BaseButton)`
  background-color: var(--orange);
  color: white;
  &:hover {
    background-color: var(--light-orange);
  }
`;
export const ButtonTwo = styled(BaseButton)`
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    color: white;
  }
`;
export const ButtonThree = styled(BaseButton)`
  background-color: transparent;
  color: black;
  opacity: 0.5;
  &:hover {
    color: var(--orange);
  }
`;
