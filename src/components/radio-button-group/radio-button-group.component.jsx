import React from 'react'
import RadioButton, { RADIO_TYPE_CLASSES } from '../radio-button/radio-button.component'
import { nanoid } from 'nanoid'
import {RadioGroupContainer, RadioButtons} from './radio-button-group.styles.jsx'

const RadioButtonGroup = ({selectPaymentOptions, label,labelList}) => {
    
  return (
  <RadioGroupContainer>
      <p>{label}</p>
      <RadioButtons>

  {labelList.map((item) =>  {
   
    return <RadioButton radioType={item.optionOn ? RADIO_TYPE_CLASSES.active: RADIO_TYPE_CLASSES.optionOff } selectPaymentOptions={selectPaymentOptions} key={nanoid()} item={item}/>
  })}
  </RadioButtons>
  </RadioGroupContainer>
  )
}

export default RadioButtonGroup