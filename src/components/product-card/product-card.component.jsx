// import './products-card.styles.scss';
import { ProductCardContainer, ProductCardImageContainer, ProductCardImage, ProductCardFooter } from './products-card.styles';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button, { BUTTON_MODIFIERS } from '../button/button.component';

const ProductCard = ({product}) => {

  const { id, name, price, imageUrl } = product;
  const { addItemToCart } = useContext( CartContext );

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer key={id}>
      <ProductCardImageContainer>
        <ProductCardImage src={imageUrl} alt={name} />
      </ProductCardImageContainer>
      <ProductCardFooter>
        <span className="product-card-name">{name}</span>
        <span className="product-card-price">{price}</span>
      </ProductCardFooter>
      <Button buttonModifier={BUTTON_MODIFIERS.inverted} onClick={addProductToCart}>Add to cart</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
