import { ThemeProvider } from "styled-components";


const theme = {
  colors: {
    orange: "#D87D4A",
    lightOrange: "#FBAF85",
    nearBlack: "#101010",
    lightGray: "#F1F1F1",
    lightGrayTwo: "#CFCFCF",
    nearWhite: "#FAFAFA",
  },
};


export const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)


