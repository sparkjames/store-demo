import './checkout-item.styles.scss';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, decrementItemFromCart, removeItemFromCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(cartItem);
  const decrementProductFromCart = () => decrementItemFromCart(cartItem);
  const removeProductFromCart = () => removeItemFromCart(cartItem);

  return (
    <div className='checkout-item'>

      <p className="checkout-item-image-container">
        <img className='cart-item-image' src={imageUrl} alt={name} />
      </p>

      <p className="checkout-item-name">{name}</p>

      <div className="checkout-item-quantity">
        <button className="checkout-item-button checkout-item-button--quantity" onClick={decrementProductFromCart}>&minus;</button>
        <span className="checkout-item-quantity-number">{quantity}</span>
        <button className="checkout-item-button checkout-item-button--quantity" onClick={addProductToCart}>&#43;</button>
      </div>

      <p className="checkout-item-price">${price}</p>

      <div className="checkout-item-remove">
        <button className="checkout-item-button checkout-item-button--remove" onClick={removeProductFromCart}>&times;</button>
      </div>

    </div>
  );
};

export default CheckoutItem;