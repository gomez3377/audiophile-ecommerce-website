import { AddressInputContainer, CheckoutInput, CheckoutLabel, FormInputContainer } from "./form-input.styles"


export const INPUT_TYPE_CLASSES = {
  default: 'default',
  address: 'address'
}


const getFormInput = (formInputType = INPUT_TYPE_CLASSES.default) => ({
  [INPUT_TYPE_CLASSES.default] : FormInputContainer,
  [INPUT_TYPE_CLASSES.address] : AddressInputContainer,
}[formInputType])

const FormInput = ({ label, inputOptions, formInputType}) => {
const CustomFormInput = getFormInput(formInputType)
  return (
    <CustomFormInput>
        <CheckoutLabel htmlFor="">{label}</CheckoutLabel>
        <CheckoutInput {...inputOptions}/>
    </CustomFormInput>
  )
}

export default FormInput