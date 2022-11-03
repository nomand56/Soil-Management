import React, { useState } from 'react';
import { Flex, Button, Heading } from '@chakra-ui/react';
import { ButtonProps, ActiveButtonProps } from './style';
import { Box } from '@mui/material';
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
        width: '90%',
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
                <input
                  style={inputField}
                  type='text'
                  {...register('name', { required: true })}
                  placeholder='First and Last Name'
                />
                <input
                  style={inputField}
                  type='text'
                  {...register('street', { required: true })}
                  placeholder='Street Address'
                />
                <div>
                  <input
                    style={halfInputField}
                    type='text'
                    {...register('extended_address', { required: true })}
                    placeholder='Apt/Suite'
                  />
                  <input
                    style={halfInputField}
                    type='text'
                    {...register('street', { required: true })}
                    placeholder='Company'
                  />
                </div>
                <div>
                  <input
                   
                    style={cityInputField}
                    type='text'
                    {...register('city', { required: true })}
                    placeholder='City'
                  />
                  <input
                    style={stateInputField}
                    type='text'
                    {...register('region', { required: true })}
                    placeholder='State'
                  />
                  <input
                    style={postalInputField}
                    type='text'
                    {...register('postal_code', { required: true })}
                    required
                    placeholder='Zip Code'
                  />
                </div>
                <button
                  variant='contained'
                  type='submit'
                  
                  // onClick={() => setstate(2)}
                >
                  Submit
                </button>
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
