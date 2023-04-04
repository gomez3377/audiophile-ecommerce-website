import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Manrope' , sans-serif;
}

body{
    background-color: ${({theme: {colors}}) => colors.lightGray};
}

h1{
    font-size: 56px;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 58px;
}

h2 {
    font-size: 40px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    line-height: 44px;
}
h3 {
    font-size: 32px;
    text-transform: uppercase;
    letter-spacing: 1.15px;
    line-height: 36px;
}
h4 {
    font-size: 28px;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 38px;
}
h5 {
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 1.7px;
    line-height: 33px;
}
h6 {
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    line-height: 24px;
}

.overline{
    font-size: 14px;
    text-transform: uppercase;
    line-height: 19px;
    letter-spacing: 10px;
    color:${({theme: {colors}})=> colors.orange};
}

.subtitle{
    font-size: 13px;
    text-transform: uppercase;
    line-height: 25px;
    color:${({theme: {colors}})=> colors.orange};
}

p{
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
}



a{
    text-decoration: none;
    color: inherit;
}


`