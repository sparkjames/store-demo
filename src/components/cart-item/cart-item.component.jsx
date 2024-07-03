// import './cart-item.styles.scss'
import { CartItemContainer, CartItemImageContainer, CartItemDetails, CartItemName } from './cart-item.styles';

const CartItem = ({cartItem}) => {
  const { id, name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer key={id}>
      <CartItemImageContainer>
        <img className='cart-item-image' src={imageUrl} alt={name} />
      </CartItemImageContainer>
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <span className="cart-item-price">{quantity} x ${price}</span>
      </CartItemDetails>
    </CartItemContainer>
  );
}

export default CartItem;
