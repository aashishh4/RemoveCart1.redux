import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalQuantity = cartItems.reduce((total, item) => total + item.cartQuantity, 0);

 
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.cartQuantity, 0);

  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/Cart">Cart</Link>
      <br/>
      <div>
        <span>Cart items: {totalQuantity}</span> 
        <br/>
        {/* <span>Total Amount: {totalAmount}</span>  */}
      </div>
    </div>
  );
}

export default Navbar;
