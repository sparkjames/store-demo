import './primary-nav.styles.scss';
import { ReactComponent as CrwnLogo } from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const PrimaryNavigation = () => {
  return (
    <nav className="primaryNav">

      <div className="logo-container">
        <Link className="logo-link" to="/">
          <CrwnLogo className='logo' />
        </Link>
      </div>

      <ul className="primaryNav-list">

        <li className="primaryNav-item">
          <Link className="primaryNav-link" to="/shop">Shop</Link>
        </li>

        <li className="primaryNav-item">
          <Link className="primaryNav-link" to="/sign-in">Sign In</Link>
        </li>

      </ul>

    </nav>
  );
}

export default PrimaryNavigation;