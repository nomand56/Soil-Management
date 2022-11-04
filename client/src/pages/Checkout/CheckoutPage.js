import React, { useState } from 'react';
import { Flex, Button, Heading, useColorModeValue, Input } from '@chakra-ui/react';
import { ButtonProps, ActiveButtonProps } from './style';
import { Box } from '@chakra-ui/react';
import {useForm} from 'react-hook-form';
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
  let [open, setopen] = useState(false);
 const color = useColorModeValue('rgb(40,40,40)', 'rgb(180,180,180)');
 const bg = useColorModeValue('rgb(250,240,240)', 'rgb(40,40,40)');
  const { onSubmit } = useCartContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const handleClick = (data) => {
 
    onSubmit(data);
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
                  color={color}
                bg={bg}
                  {...register('name', { required: true })}
                  placeholder='First and Last Name'
                />
                <Input
                  style={inputField}
                  bg={bg}
                  color={color}
                  type='text'
                  {...register('street', { required: true })}
                  placeholder='Street Address'
                />
                <div>
                  <Input
                    style={halfInputField}
                    bg={bg}
                    color={color}
                    type='text'
                    {...register('extended_address', { required: true })}
                    placeholder='Apt/Suite'
                  />
                  <Input
                    style={halfInputField}
                    bg={bg}
                    color={color}
                    type='text'
                    {...register('street', { required: true })}
                    placeholder='Company'
                  />
                </div>
                <div>
                  <Input
                   
                    style={cityInputField}
                    bg={bg}
                    color={color}
                    type='text'
                    {...register('city', { required: true })}
                    placeholder='City'
                  />
                  <Input
                    style={stateInputField}
                    bg={bg}
                    color={color}
                    type='text'
                    {...register('region', { required: true })}
                    placeholder='State'
                  />
                  <Input
                    style={postalInputField}
                    type='text'
                    color={color}
                  bg={bg}
                    {...register('postal_code', { required: true })}
                    required
                    placeholder='Zip Code'
                  />
                </div>
                <Button
                  variant='contained'
                  type='submit'
                  sx={{margin:'20px 0px'}}
                  // onClick={() => setstate(2)}
                >
                  Submit
                </Button>
              </form>
            </fieldset>
          ) : state === 2 ? (
            <Box>
              <CartDelivery />
            </Box>
          ) : state === 3 ? (
            <Box>
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
                  setstate(state + 1);
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
