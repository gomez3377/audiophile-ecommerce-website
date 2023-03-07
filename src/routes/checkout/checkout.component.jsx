import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChekcoutSummary from "../../components/checkout-summary/checkout-summary.component";
import FormInput from "../../components/Form-Input/form-input.component";
import RadioButtonGroup from "../../components/radio-button-group/radio-button-group.component";
import { ReactComponent as CashOnDeliveryIcon } from "../../assets/checkout/icon-cash-on-delivery.svg";

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

const paymentOptions = [
  { label: "e-Money", value: "eMoney" },
  { label: "Cash On Delievery", value: "cash" },
];

const Checkout = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  
  const navigateBack = useNavigate()
  const navigateBackHandler = () => navigateBack(-1)
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
    <>
      <p onClick={navigateBackHandler}>Go Back</p>
      <div className="form-container">
        <h3>Checkout</h3>
        <form action="">
          <div className="checkout-input-container">
            <fieldset>
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
            </fieldset>
            <fieldset>
              <legend className="subtitle">Shipping Info</legend>
              <FormInput
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
            </fieldset>
            <fieldset>
              <legend className="subtitle">Payment Details</legend>
              <RadioButtonGroup
                paymentMethod={paymentMethod}
                inputOptions={{
                  name: "paymentMethod",
                  onChange: onHandleChange,
                }}
                label="Payment Method"
                labelList={paymentOptions}
              />

              {paymentMethod === "cash" ? (
                <div>
                  <CashOnDeliveryIcon />
                  <p>
                    The 'Cash on Delivery' option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              ) : (
                <div>
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
                </div>
              )}
            </fieldset>
          </div>
          <ChekcoutSummary />
        </form>
      </div>
    </>
  );
};

export default Checkout;
