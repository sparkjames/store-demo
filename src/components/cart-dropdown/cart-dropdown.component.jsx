import './cart-dropdown.styles.scss';

import Button from '../button/button.component';

const CartDropdown = () => {
  return (
    <div className='cartDropdown'>
      <ul className='cartDropdown-list'></ul>
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;