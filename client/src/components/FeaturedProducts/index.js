import React from 'react';
import { useProductsContext } from '../../context/products_context';
import { Link } from 'react-router-dom';
import Wrapper from './styles';
import Error from '../Error/';
import Loading from '../Loading/';
import Product from '../Product/';
import { Text, useColorModeValue } from '@chakra-ui/react';

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();
  const color = useColorModeValue('gray.800', 'gray');

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <Wrapper className='section'>
      <div className='title'>
        <Text color={color} sx={{margin:'10px 0px'}}>Featured products</Text>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {featured.map((product) => {
          return <Product key={product._id} {...product} />;
        })}
      </div>
      <Link to='/products' className='btn'>
        all products
      </Link>
    </Wrapper>
  );
};

export default FeaturedProducts;
