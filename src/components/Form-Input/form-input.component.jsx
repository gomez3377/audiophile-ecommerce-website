import { AddressInput, CheckoutInput, CheckoutLabel } from "./form-input.styles"


export const INPUT_TYPE_CLASSES = {
  default: 'default',
  address: 'address'
}

const getInput = (inputType = INPUT_TYPE_CLASSES.default) => ({
  [INPUT_TYPE_CLASSES.default] : CheckoutInput,
  [INPUT_TYPE_CLASSES.address] : AddressInput
}[inputType])

const FormInput = ({ label, inputOptions, inputType}) => {

  const CustomInput = getInput(inputType)
  return (
    <div className='form-input-container'>
        <CheckoutLabel htmlFor="">{label}</CheckoutLabel>
        <CustomInput {...inputOptions}/>
    </div>
  )
}

export default FormInput