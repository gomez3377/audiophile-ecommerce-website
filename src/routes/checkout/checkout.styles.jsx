import styled from 'styled-components'



export const CheckoutContainer = styled.div`
    width: 1110px;
    margin: 0 auto;
    margin-top: 79px;

`
export const NavigateBackLink = styled.p`
cursor:pointer;
opacity:50%;

`


export const FormContainer = styled.form`
display:flex;
justify-content:space-between;
margin-top: 38px;
`


export const CheckoutInputContainer = styled.div`
background-color: white;
padding: 54px 48px 48px 48px;
width: 730px;
border-radius:8px;
`

export const FormSection = styled.fieldset`
display:grid;
grid-template-columns: repeat(2, 1fr);
gap: 16px;
    border:none;
    margin: 52px 0;
    .subtitle{
        font-weight: 700;
        margin-bottom: 16px;
    }
`
export const EMoneyInputsContainer = styled.div`
display:grid;
grid-template-columns: repeat(2, 1fr);
gap:16px;

`

export const CashOnDeliveryInfo = styled.div`
display:flex;
align-items: center;
p{
    margin-left:32px;
    width:554px;
    opacity:50%
}

`