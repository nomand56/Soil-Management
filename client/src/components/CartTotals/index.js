import React from 'react';
import Wrapper from './styles';
import { useCartContext } from '../../context/cart_context';
import { useUserContext } from '../../context/user_context';
import { formatPrice } from '../../utils/helpers';
import { useHistory } from 'react-router-dom';
import { useOrderContext } from '../../context/order_context';
const CartTotals = () => {
  const history = useHistory();
  const { currentUser } = useUserContext();
  const { total_amount, shipping_fee } = useCartContext();
  const {placeOrder} = useOrderContext();
  const onSubmit = () => {
placeOrder()
history.push('/orders')
}

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total :{' '}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        <button  onClick={onSubmit}>
          Place order
        </button>
      </div>
    </Wrapper>
  );
};

export default CartTotals;
