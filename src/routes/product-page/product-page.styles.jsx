import styled from "styled-components";
import DesktopImage from "../../components/desktop-image/desktop-image.component";



export const ProdcutContainer = styled.div`
    display:flex;
    margin: 0 auto;
    margin-top: 56px;
    width:1110px;
    justify-content: space-between;
    align-items: center;


`

export const ProductDetails = styled.div`
    width: 445.5px;
    .overline{
        margin-bottom:16px;
    }
    h2, p{
        margin-bottom:32px;
    }
    p {
        opacity: 0.5;
    }
    h6{
        margin-bottom:47px;
    }
`

export const QuantityContainer = styled.div`
    display:flex;
    justify-content: space-between;
    width: 296px;
    
`

export const CountContainer = styled.div`
    display:flex;
    width: 120px;
    height:48px;
    justify-content:center;
    align-items:center;
    background-color: var(--light-gray);
    .subtitle{
        padding: 15px 21px;
        color:black;
        opacity:0.25;
    }
    h6{
        margin:0;
        padding: 15px 0;

    }
`


export const MoreInfoContainer = styled.div`
    margin: 0 auto;
    width: 1110px;
    margin-top: 160px;
    display: flex;
    justify-content:space-between;
    align-items:flex-start;

    `
    
    
    export const ProdcutFeaturesContainer = styled.div`
    width:635px;
    h3{
        margin-bottom:32px;
    }
    
    `


    export const InTheBoxContainer = styled.div`
    h3{
        margin-bottom: 32px;
    }
    li{
        margin-bottom: 8px;
        font-size:15px;
    }


    span{
        color: var(--orange);
        margin-right:24px;
        font-weight:700;
    }
    
    `
    
    export const ImageGalleryContainer = styled.div`
    margin: 0 auto;
    margin-top: 160px;
    width: 1110px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
   


`
export const ProductGalleryImage = styled(DesktopImage)`
 

`

