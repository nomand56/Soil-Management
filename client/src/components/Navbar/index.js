import React from 'react';
import NavContainer from './styles';
import logo from '../../assets/logo.png';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { links } from '../../utils/constants';
import {adminLinks} from '../../utils/constants';
import CartButtons from '../CartButtons/';
import { useProductsContext } from '../../context/products_context';
import { useUserContext } from '../../context/user_context';
import ToogleButton from '../toogleButton/index'
import { Flex, ListItem, Text, UnorderedList, useColorModeValue } from '@chakra-ui/react';
const Nav = () => {
  const { currentUser } = useUserContext();
  const { openSidebar } = useProductsContext()
   const color = useColorModeValue('rgb(40,40,40)', 'rgb(180,180,180)');
  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <Text sx={{ color: '#32995b', fontSize: '25px' }}>
              GREEN WASTE COMPANY
            </Text>
          </Link>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {currentUser  &&    currentUser.userType =="admin" ?  adminLinks.map((link) => {
            const { url, text, id } = link;
            return (
              <li key={id}>
                <Text color={color}>
                  <Link to={url}>{text}</Link>
                </Text>
              </li>
            );
          }):links.map((link) => {
            const { url, text, id } = link;
            return (
              <li key={id}>
                <Text color={color}>
                  <Link to={url}>{text}</Link>
                </Text>
              </li>
            );
          })
          } 
          {currentUser?.userType=="user" && (
            <li>
              <Text color={color}>
                <Link to='/checkout'>checkout</Link>
              </Text>
            </li>
          )}
          {currentUser && (
            <li>
              <Text color={color}>
                <Link to='/orders'>orders</Link>
              </Text>
            </li>
          )}
        </ul>
        <Flex >

        <ToogleButton/>
        <CartButtons />
        </Flex>
      </div>
    </NavContainer>
  );
};

export default Nav;
