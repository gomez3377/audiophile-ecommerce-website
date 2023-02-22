import styled from "styled-components";



export const CategoryCardContainer = styled.div`
position:relative;
    width:350px;
    height:284px;
    img{
        display:block;
        margin: auto;
        
        width:50%;
       

    }
`


export const CategoryName = styled.div`
    background-color: var(--light-gray);
    border-radius:8px;
    position:absolute;
    width:inherit;
    height:204px;
    top:28.17%;
    z-index: -1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`

