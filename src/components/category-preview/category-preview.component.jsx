// import './category-preview.styles.scss';
import { CategoryPreviewContainer, CategoryPreviewTitleLink, CategoryPreviewPreview } from './category-preview.styles';

import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({title, products}) => {
  return (
    <CategoryPreviewContainer>
      <h2><CategoryPreviewTitleLink to={title}>{title.toUpperCase()}</CategoryPreviewTitleLink></h2>

      <CategoryPreviewPreview>
        {
          products.filter( (product, index) => index < 4 )
          .map( (product) => <ProductCard key={product.id} product={product} />)
        }
      </CategoryPreviewPreview>

    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
