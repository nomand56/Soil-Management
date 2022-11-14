import React from 'react';
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wrapper from './styles';
import { useProductsContext } from '../../context/products_context';
import { useCartContext } from '../../context/cart_context';
import { useUserContext } from '../../context/user_context';
import {IoIosLogOut} from 'react-icons/io'
import { Text, useColorModeValue } from '@chakra-ui/react';


const CartButtons = () => {
  const { currentUser,logout} = useUserContext();
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
   const color = useColorModeValue('rgb(40,40,40)', 'rgb(180,180,180)');
  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        <Text color={color}>Cart</Text>
        <span className='cart-container'>
          <FaShoppingCart color={color} />
          <span className='cart-value'>{total_items}</span>
        </span>

      </Link>
      {!currentUser ? (
        <Link to='/login' className='auth-btn' onClick={closeSidebar}>
          <Text color={color}>Login</Text> <FaUserPlus color={color} />
        </Link>
      
      ) : (
        <Link to='/' className='profile-btn' onClick={closeSidebar}>
  <IoIosLogOut size={30}  onClick={logout}/>
      </Link>
      )}
     

    </Wrapper>
  );
};

export default CartButtons;
