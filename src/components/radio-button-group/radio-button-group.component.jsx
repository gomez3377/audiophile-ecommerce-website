import React from 'react'
import RadioButton from '../radio-button/radio-button.component'
import { nanoid } from 'nanoid'


const RadioButtonGroup = ({paymentMethod,inputOptions, label,labelList}) => {
    
  return (
  <fieldset>
      <legend>{label}</legend>
  {labelList.map((item) =>  {
      const {label, value} = item
 return <RadioButton paymentMethod={paymentMethod} inputOptions={inputOptions} key={nanoid()} label={label} value={value}/>
})}
  </fieldset>
  )
}

export default RadioButtonGroup