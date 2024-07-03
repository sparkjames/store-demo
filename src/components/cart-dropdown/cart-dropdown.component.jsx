// import './cart-dropdown.styles.scss';
import { CartDropdownContainer, CartDropdownEmptyMessage, CartDropdownList } from './cart-dropdown.styles';

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
    <CartDropdownContainer>
      
      { !cartItems.length && 
      <CartDropdownEmptyMessage>The shopping cart is empty.</CartDropdownEmptyMessage>
      }

      { cartItems.length > 0 && 
      <CartDropdownList>
        {cartItems.map(item => <li className='cartDropdown-item' key={item.id}><CartItem cartItem={item} /></li>)}
      </CartDropdownList>
      }

      { cartItems.length > 0 && 
      <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
      }

    </CartDropdownContainer>
  );
};

export default CartDropdown;
