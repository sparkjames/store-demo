import './cart-icon.styles.scss';
import { CartIconContainer, CartIconCount } from './cart-icon.styles.jsx';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {

  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='cart-icon-shopping-bag' />
      <CartIconCount>{`${cartCount}`}</CartIconCount>
    </CartIconContainer>
  );
};

export default CartIcon;
