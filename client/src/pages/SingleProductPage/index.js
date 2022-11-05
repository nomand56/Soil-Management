import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useProductsContext } from '../../context/products_context';
import { single_product_url } from '../../utils/constants';
import { formatPrice } from '../../utils/helpers';
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  PageHero,
  ReviewModal,

} from '../../components';
import Wrapper from './styles';
import { Link } from 'react-router-dom';

const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(id);
}, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
}, [error]);

  const {
   productName,
  price,
  image,
  supplierId,
  quantity:stock,
  _id: sku }=single_product


  useEffect(() => {
    document.title = `Tomper Wear `;
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }



  return (
    <Wrapper>
      <PageHero title={productName} product />
      <div className='section section-center page'>
        <Link to='/products' className='btn'>
          back to products
        </Link>
        <div className='product-center'>
          <ProductImages image={image} />
          <section className='content'>
            <h2>{productName}</h2>
            {/* <Stars stars={stars} reviews={numberOfReviews} /> */}
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>Lorem Ipsum data</p>
            <p className='info'>
              <span>Available : </span>
              {stock > 0 ? 'In stock' : 'Out of stock'}
            </p>
            <p className='info'>
              <span>SKU : </span>
              {sku}
            </p>
            <p className='info'>
              <span>Brand : </span>
              {supplierId}
            </p>
            <hr />
            {stock > 0 && (
              <AddToCart className='cart-buttons' product={single_product} />
            )}
            <hr />
            <ReviewModal product={single_product} />
        
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProductPage;
