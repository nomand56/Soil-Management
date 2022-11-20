import React, { useState } from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import {
  legend,
  fieldset,
  inputField,
  cityInputField,
  postalInputField,
  firstInputField,
  nameInputField,
  boxStyle
} from './style';
import { CheckoutStep } from '../../components';
import CartDelivery from '../../components/cartDelivery'
import { useOrderContext } from '../../context/order_context';
function StepperCheckout() {
const [show, setShow] = useState(false)
const {
    shipping: {
      firstName,
      lastName,
      phone_number,
      address: { line1, postal_code, city, state },
    },
    updateShipping,
    placeOrder
  } = useOrderContext();
  const handleSubmit = (e) => {
    e.preventDefault()
    placeOrder()
  }
  return (<>
    {!show ?
      <Box style={boxStyle} sx={{ display: "flex", flexWrap: "wrap-reverse" }}>
        <Box padding={10}>
          <Box>
            <fieldset style={fieldset}>
              <legend style={legend}>Shipping Address</legend>
              <form id="myForm" onSubmit={handleSubmit} >
                <label for='shipping-address-first' />
                <input
                  id='shipping-address-firstName  '
                  style={firstInputField}
                  type='text'
                  name='firstName'
                  value={firstName}
                  onChange={updateShipping}
                  required
                  placeholder='First Name'
                />
                <label for='Last-name' />
                <input
                  id='shipping-address-last-name'
                  style={nameInputField}
                  type='text'
                  name='lastName'
                  required
                  value={lastName}
                  onChange={updateShipping}
                  placeholder='Last_Name'
                />  <label for='phone-number' />
                <input
                  id='shipping-address-phone_number'
                  style={nameInputField}
                  type='text'
                  name='phone_number'
                  required
                  value={phone_number}
                  onChange={updateShipping}
                  placeholder='Enter You Phone Number'
                />
                <label for='shipping-address-street-address' />
                <input
                  id='shipping-address-street-address'
                  style={inputField}
                  type='text'
                  name='line1'
                  value={line1}
                  onChange={updateShipping}
                  placeholder='Street Address'
                />
                
                <div>
                  <label for='shipping-address-city-locality' />
                  <input
                    id='shipping-address-city-locality'
                    style={cityInputField}
                    type='text'
                    name='city'
                    value={city}
                    onChange={updateShipping}
                    placeholder='City'
                  />
                  <label for='shipping-address-state-region' />
                  <input
                    id='shipping-address-state-region'
                    style={postalInputField}
                    type='text'
                    name='state'
                    value={state}
                    onChange={updateShipping}
                    placeholder='State'
                  />
                  <label for='shipping-address-postal-code' />
                  <input
                    id='shipping-address-postal-code'
                    style={postalInputField}
                    type='text'
                    name='postal_code'
                    value={postal_code}
                    required
                    onChange={updateShipping}
                    placeholder='Postal Code'
                  />
                </div>
              </form>
            </fieldset>
          </Box>
          <Box>
            <CartDelivery />
          </Box>
          <input type="submit"  id="myForm" onC  />
          
        </Box>
        <Box borderRadius="10px">
          <img src='https://img.freepik.com/premium-photo/vertical-image-child-hands-holding-multileaved-green-plant-with-root-ball-soil-defocused-green-grass-background_163068-958.jpg?w=2000' style={{ borderRadius: "10px" }} width="300px" />
        </Box>
      </Box>
      :
      <CheckoutStep />
    }
  </>
  )
}

export default StepperCheckout