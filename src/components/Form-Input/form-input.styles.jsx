import styled from "styled-components";


export const FormInputContainer = styled.div`


`

export const CheckoutLabel = styled.label`
font-weight: 700;
font-size: 12px;
line-height: 16px;
letter-spacing: -0.214286px;
margin-bottom:9px;
`

export const CheckoutInput = styled.input`
display:block;
margin-top:9px;
border-radius:8px;
width:309px;
border: 1px solid ${({theme:{colors}}) => colors.lightGrayTwo};
padding: 18px 24px;
`

export const AddressInput = styled(CheckoutInput)`
width: 634px;

`