import React, { useEffect } from 'react';
import Wrapper from './styles';
import {  ProductList,  PageHero,Sort} from '../../components';

const ProductsPage = () => {
  useEffect(() => {
    document.title = 'Green Waste Company| Products';
  }, []);

  return (
    <main>
      <PageHero title='products' />
      <Wrapper className='page'>
        <div className='section-center products'>
          <div>
          <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

export default ProductsPage;
