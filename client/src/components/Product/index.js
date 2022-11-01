import React from 'react';
import Wrapper from './styles';
import { formatPrice } from '../../utils/helpers';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = ({ image, productName, price, _id }) => {
  return (
    <Wrapper>
      <div className='container'>
        <img src={image} alt='main' />
        <Link to={`/products/${_id}`} className='link'>
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{productName}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
};

export default Product;
