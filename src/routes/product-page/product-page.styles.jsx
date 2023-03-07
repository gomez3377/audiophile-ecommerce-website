import styled from "styled-components";
import DesktopImage from "../../components/desktop-image/desktop-image.component";



export const ProductPageContainer = styled.div`
    margin: 0 auto;
    margin-top: 56px;
    width:1110px;


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

