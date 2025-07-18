import React from 'react';
import ShoeCard from './ShoeCard';
import { useOutletContext } from 'react-router';

function Cart() {
  const { cart } = useOutletContext();

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((shoe, index) => (
          <ShoeCard key={index} shoe={shoe} showActions={false} />
        ))
      )}
    </div>
  );
}

export default Cart;
