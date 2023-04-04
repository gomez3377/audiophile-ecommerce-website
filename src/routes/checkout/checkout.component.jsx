import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChekcoutSummary from "../../components/checkout-summary/checkout-summary.component";
import FormInput, { INPUT_TYPE_CLASSES } from "../../components/Form-Input/form-input.component";
import RadioButtonGroup from "../../components/radio-button-group/radio-button-group.component";
import { ReactComponent as CashOnDeliveryIcon } from "../../assets/checkout/icon-cash-on-delivery.svg";
import { CashOnDeliveryInfo, CheckoutContainer, CheckoutInputContainer, EMoneyInputsContainer, FormContainer, FormSection, NavigateBackLink } from "./checkout.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  phone: "",
  address: "",
  zipCode: "",
  city: "",
  country: "",
  paymentMethod: "",
  eMoneyNumber: "",
  eMoneyPin: "",
};



const Checkout = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const [paymentOptions, setPaymentOptions] = useState([
    { label: "e-Money", id: "eMoney", optionOn: false },
    { label: "Cash On Delievery", id: "cash", optionOn: false },
  ])
  
  const navigateBack = useNavigate()
  const navigateBackHandler = () => navigateBack(-1)

  const selectPaymentOptions = (id) => {
   
    setPaymentOptions(paymentOptions.map((option) => 
        option.id == id 
        ? {...option, optionOn: true}
        : {...option, optionOn: false}
    ))
    setFormFields({...formFields, paymentMethod: id})
  }
  const {
    displayName,
    email,
    phone,
    address,
    zipCode,
    city,
    country,
    paymentMethod,
    eMoneyNumber,
    eMoneyPin,
  } = formFields;
  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  

  return (
    <CheckoutContainer>
      <NavigateBackLink onClick={navigateBackHandler}>Go Back</NavigateBackLink>
      <FormContainer action="">
   
          <CheckoutInputContainer>
        <h3>Checkout</h3>
            <FormSection>
              <legend className="subtitle">Billing Details</legend>
              <FormInput
                label="Name"
                inputOptions={{
                  name: "displayName",
                  value: displayName,
                  type: "text",
                  placeholder: "Type your Name",
                  required: true,
                  onChange: onHandleChange,
                }}
              />
              <FormInput
                label="Email Address"
                inputOptions={{
                  name: "email",
                  value: email,
                  type: "email",
                  placeholder: "someone@example.com",
                  required: true,
                  onChange: onHandleChange,
                }}
              />
              <FormInput
                label="Phone Number"
                inputOptions={{
                  name: "phone",
                  value: phone,
                  type: "tel",
                  placeholder: "1-123-456-7890",
                  required: true,
                  onChange: onHandleChange,
                }}
              />
            </FormSection>
            <FormSection>
              <legend className="subtitle">Shipping Info</legend>
              <FormInput
              formInputType={INPUT_TYPE_CLASSES.address}
                label="Address"
                inputOptions={{
                  name: "address",
                  value: address,
                  type: "text",
                  placeholder: "1137 Williams Ave",
                  required: true,
                  onChange: onHandleChange,
                }}
              />
              <FormInput
                label="Zip Code"
                inputOptions={{
                  name: "zipCode",
                  value: zipCode,
                  type: "number",
                  placeholder: "10001",
                  required: true,
                  onChange: onHandleChange,
                }}
              />
              <FormInput
                label="City"
                inputOptions={{
                  name: "city",
                  value: city,
                  type: "text",
                  placeholder: "New York",
                  required: true,
                  onChange: onHandleChange,
                }}
              />
              <FormInput
                label="Country"
                inputOptions={{
                  name: "country",
                  value: country,
                  type: "text",
                  placeholder: "United States",
                  required: true,
                  onChange: onHandleChange,
                }}
              />
            </FormSection>
            <FormSection>
              <legend className="subtitle">Payment Details</legend>
              <RadioButtonGroup
                selectPaymentOptions = {selectPaymentOptions}
                label="Payment Method"
                labelList={paymentOptions}
              />

              {paymentMethod === "cash" ? (
                <CashOnDeliveryInfo>
                  <CashOnDeliveryIcon />
                  <p>
                    The 'Cash on Delivery' option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </CashOnDeliveryInfo>
              ) : (
                <EMoneyInputsContainer>
                  <FormInput
                    label="e-Money Number"
                    inputOptions={{
                      name: "eMoneyNumber",
                      value: eMoneyNumber,
                      type: "number",
                      placeholder: "12334567",
                      required: true,
                      onChange: onHandleChange,
                    }}
                  />
                  <FormInput
                    label="e-Money Pin"
                    inputOptions={{
                      name: "eMoneyPin",
                      value: eMoneyPin,
                      type: "number",
                      placeholder: "1234",
                      required: true,
                      onChange: onHandleChange,
                    }}
                  />
                </EMoneyInputsContainer>
              )}
            </FormSection>
          </CheckoutInputContainer>
          <ChekcoutSummary />
       
      </FormContainer>
    </CheckoutContainer>
  );
};

export default Checkout;
