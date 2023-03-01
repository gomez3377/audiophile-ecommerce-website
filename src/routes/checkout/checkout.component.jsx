import React, { useState } from "react";
import CartComponent from "../../components/cart/cart.component";
import FormInput from "../../components/Form-Input/form-input.component";
import RadioButtonGroup from "../../components/radio-button-group/radio-button-group.component";

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

const paymentOptions = [{label:"e-Money", value:"eMoney"}, {label:"Cash On Delievery", value:"cash"}]

const Checkout = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  
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
      <p>Go Back</p>
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
              <RadioButtonGroup paymentMethod={paymentMethod} inputOptions={{
                  name:"paymentMethod",
                  onChange: onHandleChange,
                  
              }} label="Payment Method" labelList = {paymentOptions} />
             
          


              <label htmlFor="">e-Money Number</label>
              <input type="number" name="" id="" />
              <label htmlFor="">e-Money Pin</label>
              <input type="number" name="" id="" />
            </fieldset>
          </div>
          <CartComponent />
        </form>
      </div>
    </>
  );
};

export default Checkout;
