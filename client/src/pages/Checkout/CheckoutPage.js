import React, { useState, useEffect } from 'react';
import { useOrderContext } from '../../context/order_context';
import CartDelivery from '../../components/cartDelivery';
import CartTotals from '../../components/CartTotals';

import { useCartContext } from '../../context/cart_context';
import ShippingForm from '../../components/ShippingForm';
import { checkObjectProperties } from '../../utils/helpers';
import Wrapper from './style';
import { useColorModeValue } from '@chakra-ui/react';
function CheckoutPage() {
  const {
    shipping: {
      name,
      address: { line1, postal_code, city, state, country },
    },
  } = useOrderContext();
  const { cart } = useCartContext();
  const [editingShipping, setEditingShipping] = useState(true);
  useEffect(() => {
    if (
      checkObjectProperties({ name, line1, postal_code, city, state, country })
    ) {
      return setEditingShipping(true);
    }
    setEditingShipping(false);
  }, []);

  useEffect(() => {
    document.title = 'Green Waste Company  | Checkout';
  }, []);

  const confirmShipping = () => {
    setEditingShipping(false);
  };

  return (
    <main>
      {editingShipping ? (
        <ShippingForm confirmShipping={confirmShipping} />
      ) : (
        <Wrapper className='page'>
          {cart.length < 1 ? (
            <div className='empty'>
              <h2>Your cart is empty</h2>
            </div>
          ) : (
            <div className='flex'>
              <CartDelivery />
              <CartTotals />
            </div>
          )}
        </Wrapper>
      )}
    </main>
  );
}
export default CheckoutPage;
