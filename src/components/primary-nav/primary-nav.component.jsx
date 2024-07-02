// import './primary-nav.styles.scss';
import { NavigationContainer, PrimaryNavItem, PrimaryNavLink, PrimaryNavList } from './primary-nav.styles';
import { ReactComponent as CrwnLogo } from '../../assets/logo.svg';

import { Link } from 'react-router-dom';
import { useContext } from 'react';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utilities/firebase/firebase.utilities';

const PrimaryNavigation = () => {

  const { currentUser } = useContext(UserContext);
  // console.log('Primary Nav > currentUser = ', currentUser);

  const { isCartOpen } = useContext(CartContext);

  return (
    // <nav className="primaryNav">

    //   <div className="logo-container">
    //     <Link className="logo-link" to="/">
    //       <CrwnLogo className='logo' />
    //     </Link>
    //   </div>

    //   <ul className="primaryNav-list">

    //     <li className="primaryNav-item">
    //       <Link className="primaryNav-link" to="/shop">Shop</Link>
    //     </li>

    //     <li className="primaryNav-item">
    //     {
    //       currentUser ? (
    //         <span className='primaryNav-link' onClick={signOutUser}>Sign Out</span>
    //       ) : (

    //         <Link className="primaryNav-link" to="/auth">Sign In</Link>
    //       )
    //     }
    //     </li>

    //     <li className="primaryNav-item">
    //       <CartIcon />
    //       {isCartOpen && <CartDropdown />}
    //     </li>

    //   </ul>

    // </nav>
    <NavigationContainer>

      <div className="logo-container">
        <Link className="logo-link" to="/">
          <CrwnLogo className='logo' />
        </Link>
      </div>

      <PrimaryNavList>

        <PrimaryNavItem>
          <PrimaryNavLink as="span" className="primaryNav-link" to="/shop">Shop</PrimaryNavLink>
        </PrimaryNavItem>

        <PrimaryNavItem>
        {
          currentUser ? (
            <span className='primaryNav-link' onClick={signOutUser}>Sign Out</span>
          ) : (

            <PrimaryNavLink as="span" className="primaryNav-link" to="/auth">Sign In</PrimaryNavLink>
          )
        }
        </PrimaryNavItem>

        <PrimaryNavItem>
          <CartIcon />
          {isCartOpen && <CartDropdown />}
        </PrimaryNavItem>

      </PrimaryNavList>

    </NavigationContainer>
  );
}

export default PrimaryNavigation;
