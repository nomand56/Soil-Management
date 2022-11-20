import React, { useState } from 'react'
import { Box, Button, Checkbox, Flex, Input, useColorModeValue, useToast } from '@chakra-ui/react'
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
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { create_order_url } from '../../utils/constants';

function StepperCheckout() {
    const color = useColorModeValue('rgb(40,40,40)', 'rgb(250,250,250)');
    const bg = useColorModeValue('rgb(250,250,250)', 'rgb(40,40,40)');
  const [show, setShow] = useState(false)
  let [values, setvalues] = useState({})
  let [deliveryCharges, setdeliveryCharges] = useState(0)
  let [allvalues, setallvalues] = useState({})
const {state} = useLocation()
const toast = useToast()
console.log(state)
const {
    shipping: {
      firstName,
      lastName,
      phone_number,
      address: { line1, postal_code, city },
    },
    updateShipping,
    placeOrder
  } = useOrderContext();

  function handleChange(e)
  {
    setvalues({...values,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.stopPropagation()
    if (!values.city || !values.state || !values.postal_code || !values.phone_number || !values.line1)
    {
     return toast({
       position: 'top',
       description: 'Provide All details .!!',
       status: 'error',
       duration: 5000,
       isClosable: true,
     });
    }
   
    const obj = {
      shippingInfo: {
        address: `${values.line1} ${values.city} ${values.state}`,
        city: values.city,
        state: values.state,
        postalCode: +values.postal_code,
        phoneNumber: +values.phone_number,
      },
      orderItems: [
        {
          name: state?.state.productName,
          price: state?.state.price,
          quantity: 1,
          product: state?.state._id,
        },
      ],
      user: {
        name: 'guest',
        email: 'guest',
      },
      itemsPrice: state?.state.price,
      shippingPrice: deliveryCharges || 1,
      totalPrice: state?.state.price + deliveryCharges,
    };
    axios.post(create_order_url, obj).then((res) => {
      if (res.data)
      {
         toast({
           position: 'top',
           description: 'Provide Order Place successfully.!!',
           status: 'success',
           duration: 5000,
           isClosable: true,
         });
        console.log(res.data)
        setallvalues({...obj,...state.state})
        setShow(true)
        }
    });
  }
  return (
    <>
      {!show ? (
        <Box
          style={boxStyle}
          sx={{
            display: 'flex',
            flexWrap: 'wrap-reverse',
            justifyContent: 'center',
          }}
        >
          <Box padding={10}>
            <Box>
              <fieldset style={fieldset}>
                <legend style={legend}>Shipping Address</legend>
                <label for='shipping-address-first' />
                <Input
                  id='shipping-address-firstName  '
                  style={firstInputField}
                  bg={bg}
                  color={color}
                  type='text'
                  name='firstName'
                  onChange={handleChange}
                  required
                  placeholder='First Name'
                />
                <label for='Last-name' />
                <Input
                  id='shipping-address-last-name'
                  style={nameInputField}
                  type='text'
                  bg={bg}
                  color={color}
                  name='lastName'
                  required
                  onChange={handleChange}
                  placeholder='Last_Name'
                />{' '}
                <label for='phone-number' />
                <Input
                  id='shipping-address-phone_number'
                  style={nameInputField}
                  type='number'
                  bg={bg}
                  color={color}
                  name='phone_number'
                  required
                  onChange={handleChange}
                  placeholder='Enter You Phone Number'
                />
                <label for='shipping-address-street-address' />
                <Input
                  id='shipping-address-street-address'
                  style={inputField}
                  type='text'
                  name='line1'
                  bg={bg}
                  onChange={handleChange}
                  placeholder='Street Address'
                />
                <div>
                  <label for='shipping-address-city-locality' />
                  <Input
                    id='shipping-address-city-locality'
                    style={cityInputField}
                    type='text'
                    name='city'
                    bg={bg}
                    onChange={handleChange}
                    color={color}
                    placeholder='City'
                  />
                  <label for='shipping-address-state-region' />
                  <Input
                    id='shipping-address-state-region'
                    style={postalInputField}
                    type='text'
                    bg={bg}
                    color={color}
                    name='state'
                    onChange={handleChange}
                    placeholder='State'
                  />
                  <label for='shipping-address-postal-code' />
                  <Input
                    id='shipping-address-postal-code'
                    style={firstInputField}
                    type='number'
                    bg={bg}
                    sx={{ margin: '20px 0px' }}
                    color={color}
                    name='postal_code'
                    required
                    onChange={handleChange}
                    placeholder='Postal Code'
                  />
                </div>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox onChange={() => setdeliveryCharges(50)} /> Express
                    (Delivery Within 2-3 Days)
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox onChange={() => setdeliveryCharges(30)} /> Standard
                    (Delivery Within 1 Week)
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox onChange={() => setdeliveryCharges(10)} /> Normal
                    (Delivery Within 2-3 Weeks)
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox onChange={() => setdeliveryCharges(1)} /> PickUp
                    
                  </Box>
                </Box>
                <Button
                  bg={bg}
                  type='submit'
                  color={color}
                  sx={{ margin: '20px 0px' }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </fieldset>
            </Box>
          </Box>
          <Box borderRadius='10px'>
            <img
              src='https://img.freepik.com/premium-photo/vertical-image-child-hands-holding-multileaved-green-plant-with-root-ball-soil-defocused-green-grass-background_163068-958.jpg?w=2000'
              style={{ borderRadius: '10px' }}
              width='300px'
            />
          </Box>
        </Box>
      ) : (
        <CheckoutStep allvalues={allvalues} />
      )}
    </>
  );
}

export default StepperCheckout