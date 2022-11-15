import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import {
  legend,
  fieldset,
  label,
  inputField,
  halfInputField,
  cityInputField,
  stateInputField,
  postalInputField,
  firstInputField,
  nameInputField,
  boxStyle
} from './style';
import { ShippingAddress } from '../../components'
import CartDelivery from '../../components/cartDelivery'
function StepperCheckout() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Box style={boxStyle} sx={{ display: "flex" ,flexWrap:"wrap-reverse"}}>

      <Box padding={10}>
        <Box>
          <fieldset style={fieldset}>
            <legend style={legend}>Shipping Address</legend>
            <form id="myForm"onSubmit={handleSubmit(onSubmit)}>
              <label for='shipping-address-first-and-last-name' />
              <input
                id='shipping-address-first-and-last-name'
                style={firstInputField}
                type='text'
                name='name'
                required
                {...register('firstName', { required: true })}
                placeholder='First Name'
              />
              <label for='Last-name' />
              <input
                id='shipping-address-first-and-last-name'
                style={nameInputField}
                type='text'
                name='name'
                required
                {...register('lastName', { required: true })}
                placeholder='Last Name'
              />
              <label for='shipping-address-street-address' />
              <input
                id='shipping-address-street-address'
                style={inputField}
                type='text'
                {...register('street', { required: true })}
                name='street_address'
                placeholder='Street Address'
              />
              <div>
                <label for='shipping-address-city-locality' />
                <input
                  id='shipping-address-city-locality'
                  style={cityInputField}
                  type='text'
                  {...register('city', { required: true })}
                  name='locality'
                  placeholder='City'
                />
                <label for='shipping-address-state-region' />
                <input
                  id='shipping-address-state-region'
                  style={stateInputField}
                  type='text'
                  name='region'
                  {...register('region', { required: true })}
                  placeholder='State'
                />
                <label for='shipping-address-postal-code' />
                <input
                  id='shipping-address-postal-code'
                  style={postalInputField}
                  type='text'
                  name='postal_code'
                  {...register('postal_code', { required: true })}
                  required
                  placeholder='Zip Code'
                />
              </div>
            </form>
          </fieldset>
        </Box>
        <Box>
          <CartDelivery />
        </Box>
        <input type="submit" form='myForm' value="next" />
      </Box>
      <Box borderRadius="10px">
        <img src='https://img.freepik.com/premium-photo/vertical-image-child-hands-holding-multileaved-green-plant-with-root-ball-soil-defocused-green-grass-background_163068-958.jpg?w=2000' style={{ borderRadius: "10px" }} width="300px"  />
      </Box>
    </Box>
  )
}

export default StepperCheckout