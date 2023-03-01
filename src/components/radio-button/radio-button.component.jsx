import React from 'react'

const RadioButton = ({label, value, inputOptions, paymentMethod}) => {
  

  return (
    <>
    <input type="radio"  id={value} {...inputOptions} value={value} checked={paymentMethod === value}  />
    <label htmlFor={label}>{label}</label>
    </>
  )
}

export default RadioButton