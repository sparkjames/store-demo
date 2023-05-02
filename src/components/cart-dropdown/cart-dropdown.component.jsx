import './cart-dropdown.styles.scss';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className='cartDropdown'>
      <ul className='cartDropdown-list'>
        {cartItems.map(item => <li className='cartDropdown-item' key={item.id}><CartItem cartItem={item} /></li>)}
      </ul>
      <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;