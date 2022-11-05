import React, { useState, useRef } from 'react';
import { Flex, Button, Heading, useColorModeValue, Input } from '@chakra-ui/react';
import { ButtonProps, ActiveButtonProps } from './style';
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
// import { ShippingAddress } from '../../components/Checkout/ShippingAddress';
import CartDelivery from '../../components/cartDelivery';
import CartTotals from '../../components/CartTotals';
import {
  legend,
  fieldset,
  label,
  inputField,
  halfInputField,
  cityInputField,
  stateInputField,
  postalInputField,
} from './style';
import { useCartContext } from '../../context/cart_context';
function CheckoutPage() {
  let [state, setstate] = useState(1);
  let {currentUser} = useCartContext();
  const color = useColorModeValue('rgb(40,40,40)', 'rgb(180,180,180)');
  const bg = useColorModeValue('rgb(250,240,240)', 'rgb(40,40,40)');  const nameRef = useRef(null);
  const streetRef = useRef(null);
  const addressRef = useRef(null);
  const cityRef = useRef(null);
  const regionRef = useRef(null);
  const postalCodeRef = useRef(null);
  const countryRef = useRef(null);
  const { onSubmit,form } = useCartContext();

  const handleSubmit = (e) => {
   
  };

  const handleClick = () => {
    const data = {
      name: nameRef.current.value,
      street: streetRef.current.value,
      address: addressRef.current.value,
      city: cityRef.current.value,
      region: regionRef.current.value,
      postalCode: postalCodeRef.current.value,
      country: countryRef.current.value,
    };
    onSubmit(data);
    setstate(state + 1);
  };

  return (
    <Box
      sx={{
        display: { md: 'flex', xs: 'block' },
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '80%',
        margin: '20px auto',
      }}
    >
      <Box>
        <Box>
          <h1
            style={{
              color: '#ab7a5f',
              fontWeight: 'bold',
              fontSize: '30px',
              wordSpacing: '1px',
              margin: '5px 0px',
            }}
          >
            Quality Soil For Your Garden
          </h1>
          <h4 style={{ margin: '5px 0px' }}>
            Green Waste Company is commited to provide you best quality soil for
            you needs at you door step.
          </h4>
          <h6 style={{ color: 'gray', fontSize: '10px' }}>Apply Filters</h6>
          {state === 1 ? (
            <fieldset style={fieldset}>
              <legend style={legend}>Shipping Address</legend>
              <form onSubmit={handleSubmit(handleClick)}>
                <Input
                  style={inputField}
                  type='text'
                  placeholder='First and Last Name'
                  value={form? form.name : currentUser?.name+currentUser?.surname}
                  ref={nameRef}
                />
                <Input
                  style={inputField}
                  bg={bg}
                  color={color}
                  type='text'
                  value={form?.street}
                  placeholder='Street Address'
                  ref={streetRef}
                />
                <div>
                  <Input

                    style={halfInputField}
                    bg={bg}
                    color={color}
                    type='text'
                    value={form?.address}
                    placeholder='Apt/Suite'
                    ref={addressRef}
                  />
                  <Input
                    style={halfInputField}
                    bg={bg}
                    color={color}
                    type='text'
                    value={form?.country}
                    placeholder='Company'
                    ref={countryRef}
                  />
                </div>
                <div>
                  <Input
                    style={cityInputField}
                    bg={bg}
                    color={color}
                    type='text'
                    value={currentUser?.city}
                    placeholder='City'
                    ref={cityRef}
                  />
                  <Input
                    style={stateInputField}
                    bg={bg}
                    color={color}
                    type='text'
                    value={form?.region}
                    placeholder='State'
                    ref={regionRef}
                  />
                  <Input
                    style={postalInputField}
                    type='text'
                    value={currentUser?.postalCode}

                    placeholder='Zip Code'
                    ref={postalCodeRef}
                  />
                </div>
            
              </form>
            </fieldset>
          ) : state === 2 ? (
            <Box>
              <CartDelivery />
            </Box>
          ) : state === 3 ? (
            <Box>
                {console.log(form)}
              <CartTotals />
            </Box>
          ) : null}

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '20px 0px',
            }}
          >
            <Button
              variant='contained'
              disabled={state.index === 1 ? true : false}
              onClick={() => {
                setstate(state - 1);
              }}
            >
              Previous
            </Button>
            {state < 3 ? (
              <Button
                variant='contained'
                onClick={() => {
                  state === 1 ? handleClick() : setstate(state + 1);
                }}
              >
                Next
              </Button>
            ) : (
              <Button variant='contained' onClick={handleSubmit}>
                Submit
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CheckoutPage;
