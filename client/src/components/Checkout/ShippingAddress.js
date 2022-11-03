import React from 'react';
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
import { useForm } from 'react-hook-form';
import { useCartContext } from '../../context/cart_context';


export const ShippingAddress = () => {
const {onSubmit}=useCartContext()
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    // const handleClick = (data) => {
    //     onSubmit(data);
    // }
    
    return (
  <fieldset style={fieldset}>
    <legend style={legend}>Shipping Address</legend>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label for='shipping-address-first-and-last-name' />
      <input
        id='shipping-address-first-and-last-name'
        style={inputField}
        type='text'
        name='name'
        required
        {...register('name', { required: true })}
        placeholder='First and Last Name'
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
        <label for='shipping-address-extended-address' />
        <input
          id='shipping-address-extended-address'
          style={halfInputField}
          type='text'
          name='extended_address'
          {...register('extended_address', { required: true })}
          placeholder='Apt/Suite'
        />
        <label for='shipping-address-company' />
        <input
          id='shipping-address-company'
          style={halfInputField}
          type='text'
          name='lastName'
          {...register('street', { required: true })}
          required
          placeholder='Company'
        />
      </div>
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
)
    }