import React from 'react'
import { ButtonOne, ButtonTwo, ButtonThree } from './button.styles'

export const BUTTON_TYPE_CLASSES = {
  buttonOne: 'button-one',
  buttonTwo: 'button-two',
  buttonThree: 'button-three',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.buttonOne) => (
  {
    [BUTTON_TYPE_CLASSES.buttonOne] : ButtonOne,
    [BUTTON_TYPE_CLASSES.buttonTwo] : ButtonTwo,
    [BUTTON_TYPE_CLASSES.buttonThree] : ButtonThree,

}[buttonType]
)



const Button = ({children, buttonType, ...otherProps}) => {
  const CustomButton = getButton(buttonType)
  return (
    <CustomButton {...otherProps}>{children}</CustomButton>
  )
}

export default Button