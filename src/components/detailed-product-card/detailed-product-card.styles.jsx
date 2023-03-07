import styled from 'styled-components'
import DesktopImage from '../desktop-image/desktop-image.component'

export const DetailedProductCardContainer = styled.div`
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

export const ProductImage = styled(DesktopImage)`
    width: 540px;
    height: 560px;
`

