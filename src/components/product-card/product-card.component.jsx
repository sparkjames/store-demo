import './products-card.styles.scss';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';

const ProductCard = ({product}) => {

  const { id, name, price, imageUrl } = product;
  const { addItemToCart } = useContext( CartContext );

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='product-card' key={id}>
      <div className='product-card-image-container'>
        <img className='product-card-image' src={imageUrl} alt={name} />
      </div>
      <footer className='product-card-footer'>
        <span className="product-card-name">{name}</span>
        <span className="product-card-price">{price}</span>
      </footer>
      <Button buttonModifier="invert" onClick={addProductToCart}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;