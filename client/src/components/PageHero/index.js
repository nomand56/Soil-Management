import React from 'react';
import Wrapper from './styles';
import { Link } from 'react-router-dom';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const PageHero = ({ title, product }) => {
   const color = useColorModeValue('rgb(40,40,40)', 'rgb(180,180,180)');
  return (
    <Wrapper>
      <div className='section-center'>
        <h3 style={{display:'flex',alignItems:'center'}}>
          <Link to='/'>
            <Text fontSize='lg' color={color}>Home</Text>
          </Link>
          {product && <Link to='/products'><Text fontSize='lg' color={color}>/ products</Text></Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

export default PageHero;
