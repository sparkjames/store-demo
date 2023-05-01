import './cart-item.styles.scss'

const CartItem = ({cartItem}) => {
  const { id, name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='cart-item' key={id}>
      <div className='cart-item-image-container'>
        <img className='cart-item-image' src={imageUrl} alt={name} />
      </div>
      <div className='cart-item-details'>
        <span className="cart-item-name">{name}</span>
        <span className="cart-item-price">{quantity} x ${price}</span>
      </div>
    </div>
  );
}

export default CartItem;