import React from 'react';
import { Wrapper, WrapperDiv } from './styles';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useOrderContext } from '../../context/order_context';
import { useCartContext } from '../../context/cart_context';
import { Country, State, City } from 'country-state-city';
import { Input, Select, useColorModeValue } from '@chakra-ui/react';

const countries = [Country.getCountryByCode('NO')];
const states = State.getStatesOfCountry('NO');
const cities = City.getCitiesOfCountry('NO');

function ShippingForm({ confirmShipping }) {
   const color = useColorModeValue('rgb(40,40,40)', 'rgb(180,180,180)');
   const bg = useColorModeValue('rgb(250,250,250)', 'rgb(40,40,40)');

  const {
    shipping: {
      name,
      phone_number,
      address: { line1, postal_code, city, state, country },
    },
    updateShipping,
  } = useOrderContext();
  const { cart } = useCartContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const zipRegex = new RegExp();

    if (!name) {
      return toast.error('Enter your Name');
    }
    if (!phone_number || !/^\d{11}$/.test(phone_number)) {
      return toast.error('Enter your phone number');
    }
    if (!line1) {
      return toast.error('Enter your Address');
    }
    if (!postal_code) {
      return toast.error('Enter your Zip Code');
    }
    if (!zipRegex.test(postal_code)) {
      return toast.error('Enter Valid Zip Code');
    }
    if (!city) {
      return toast.error('Enter your City');
    }
    if (!state) {
      return toast.error('Enter your State');
    }
    if (!country) {
      return toast.error('Enter your Country');
    }
    return confirmShipping();
  };

  if (cart.length < 1) {
    return (
      <WrapperDiv className='page'>
        <div className='empty'>
          <h2>Your cart is empty</h2>
          <Link to='/products' className='btn'>
            fill it
          </Link>
        </div>
      </WrapperDiv>
    );
  }

 

  return (
    <Wrapper className='page-100'>
      <div>
        <div className='title'>
          <h2>Shipping</h2>
        </div>
        <form onSubmit={handleSubmit}>
          {/* name */}
          <div className='form-control'>
            <Input
              type='text'
              name='name'
              className='input'
              color={color}
              bg={bg}
              placeholder='Full name'
              value={name}
              onChange={updateShipping}
            />
          </div>
          {/* end name */}
          {/* phone */}
          <div className='form-control'>
            <Input
              type='number'
              color={color}
              bg={bg}
              name='phone_number'
              className='input'
              placeholder='Phone number'
              value={phone_number}
              onChange={updateShipping}
            />
          </div>
          {/* end phone */}
          {/* address line 1 */}
          <div className='form-control'>
            <Input
              type='text'
              color={color}
              bg={bg}
              name='line1'
              className='input'
              placeholder='Address'
              value={line1}
              onChange={updateShipping}
            />
          </div>
          {/* end address line 1 */}
          {/* address postal code */}
          <div className='form-control'>
            <Input
              type='number'
              color={color}
              bg={bg}
              name='postal_code'
              className='input'
              placeholder='Zip Code'
              value={postal_code}
              onChange={updateShipping}
            />
          </div>
          {/* end address postal code */}
          {/* address city */}
          <div className='form-control'>
            <Select
              name='city'
              className='input sort-input'
              bg={bg}
              color={color}
              value={city}
              onChange={updateShipping}
              placeholder='Select City'
            >
              {cities.map((item, index) => {
                return (
                  <option key={index} value={item.isoCode}>
                    {item.name}
                  </option>
                );
              })}
            </Select>
          </div>
          {/* end address city */}
          {/* address state */}
          <div className='form-control'>
            <Select
              name='state'
              className='input sort-input'
              color={color}
              bg={bg}
              value={state}
              onChange={updateShipping}
              placeholder='Select State'
            >
              {states.map((item, index) => {
                return (
                  <option key={index} value={item.stateCode}>
                    {item.name}
                  </option>
                );
              })}
            </Select>
          </div>
          {/* end address state */}
          {/* address country */}
          <div className='form-control'>
            <Select
              name='country'
              color={color}
              className='input sort-input'
              bg={bg}
              value={country}
              onChange={updateShipping}
              placeholder='Select Country'
            >
              {countries.map((item, index) => {
                return (
                  <option key={index} value={item.countryCode}>
                    {item.name}
                  </option>
                );
              })}
            </Select>
          </div>
          {/* end address country */}
          <button type='submit' className='btn shipping-btn'>
            confirm
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

export default ShippingForm;
