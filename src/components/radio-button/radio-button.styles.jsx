import styled from 'styled-components'

export const RadioButtonContainer = styled.div`
width:100%;
padding: 18px 16px;
border-radius: 8px;
margin-bottom: 16px;
cursor: pointer;

display:flex;
align-items:center;

`


export const InactiveRadioButtonContainer = styled(RadioButtonContainer)`

border: 1px solid ${({theme:{colors}})=> colors.lightGray};

`

export const ActiveRadioButtonContainer = styled(RadioButtonContainer)`
border: 1px solid ${({theme:{colors}})=> colors.orange};

`

export const OuterRadioCircle = styled.div`
width:20px;
height:20px;
border: 1px solid ${({theme:{colors}})=> colors.lightGray};
border-radius:50%;
margin-right: 16px;
position:relative;

`

export const InnerRadioCircle = styled.div`
position: absolute;
width:10px;
height:10px;
top:20%;
left:20%;

border-radius:50%;
background-color: ${({theme:{colors}})=> colors.orange};


`