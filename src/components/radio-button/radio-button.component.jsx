import React from 'react'
import { ActiveRadioButtonContainer, InnerRadioCircle, OuterRadioCircle, InactiveRadioButtonContainer } from './radio-button.styles'


export const RADIO_TYPE_CLASSES = {
  inactive: "inactive",
  active: "active",
  
}

const getRadioButton = (radioType = RADIO_TYPE_CLASSES.inactive) => (
  {
    [RADIO_TYPE_CLASSES.inactive] : InactiveRadioButtonContainer,
    [RADIO_TYPE_CLASSES.active] : ActiveRadioButtonContainer,

  }[radioType]
)

const RadioButton = ({ selectPaymentOptions, item, radioType}) => {

  const {id, label, optionOn} = item
 const CustomRadio = getRadioButton(radioType)

  return (

    <CustomRadio onClick= {() => selectPaymentOptions(id)}>
    <OuterRadioCircle>
     {optionOn && <InnerRadioCircle/>}
           
      </OuterRadioCircle>
        <p>{label}</p>

    </CustomRadio>

  )
}

export default RadioButton