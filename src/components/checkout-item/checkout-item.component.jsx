// import './checkout-item.styles.scss';
import { CheckoutItemContainer, CheckoutItemButton, CheckoutItemPrice, CheckoutItemQuantity, CheckoutItemQuantityNumber } from './checkout-item.styles';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, decrementItemFromCart, removeItemFromCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(cartItem);
  const decrementProductFromCart = () => decrementItemFromCart(cartItem);
  const removeProductFromCart = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>

      <p className="checkout-item-image-container">
        <img className='cart-item-image' src={imageUrl} alt={name} />
      </p>

      <p className="checkout-item-name">{name}</p>

      <CheckoutItemQuantity>
        <CheckoutItemButton onClick={decrementProductFromCart}>&minus;</CheckoutItemButton>
        <CheckoutItemQuantityNumber>{quantity}</CheckoutItemQuantityNumber>
        <CheckoutItemButton onClick={addProductToCart}>&#43;</CheckoutItemButton>
      </CheckoutItemQuantity>

      <CheckoutItemPrice>${price}</CheckoutItemPrice>

      <div className="checkout-item-remove">
        <CheckoutItemButton onClick={removeProductFromCart}>&times;</CheckoutItemButton>
      </div>

    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
