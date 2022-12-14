import React from 'react';
import Wrapper from './styles';
import Product from '../Product/';

const GridView = ({ products }) => {
  console.log("grid",products)
  return (
    <Wrapper>
      <div className='products-container'>
        {products.map((product) => {
          return <Product key={product._id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

export default GridView;
