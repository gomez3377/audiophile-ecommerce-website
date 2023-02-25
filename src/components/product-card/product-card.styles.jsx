import styled from 'styled-components'



export const ProductCardContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    max-width: 1100px;
    max-height:560px;
    margin: 160px auto;
   

`
export const ProductImageContainer = styled.div`
    background-color: var(--light-gray);
    max-width:540px;
`

export const ProductInfo = styled.div`
    max-width:445px;
    .overline{
        margin-bottom:16px;
    }
    h2{
        margin-bottom:32px;
    }
    p{
        margin-bottom:40px
    }
    
`