import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {

  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='cart-icon-shopping-bag' />
      <span className='cart-icon-count'>0</span>
    </div>
  );
};

export default CartIcon;