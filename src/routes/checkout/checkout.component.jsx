import { useContext, useEffect } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import './checkout.styles.scss';

const CheckOut = () => {
  const { cartItems, setIsCartOpen, cartTotal } = useContext(CartContext);

  useEffect( () => {
    setIsCartOpen(false);
  }, [setIsCartOpen]);

  return (
    <div className='checkout'>

      <h1 className="page-heading">Checkout page</h1>

      <ul className='checkout-list'>
        <li className="checkout-row checkout-list-header">
          <p className="checkout-list-header-label">Photo</p>
          <p className="checkout-list-header-label">Product</p>
          <p className="checkout-list-header-label">Quantity</p>
          <p className="checkout-list-header-label">Price</p>
          <p className="checkout-list-header-label">Remove</p>
        </li>
        {cartItems.map(item => {
          return (
            <li className='checkout-row' key={item.id}>
              <CheckoutItem cartItem={item} />
            </li>
          );
        })}
      </ul>

      <div className="cart-total-container">
        <p className="cart-total">Total: ${cartTotal}</p>
      </div>

    </div>
  );
}

export default CheckOut;