import './category-preview.styles.scss';

import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({title, products}) => {
  return (
    <div className='categoryPreview'>
      <h2><Link className='categoryPreview-title' to={title}>{title.toUpperCase()}</Link></h2>

      <div className="categoryPreview-preview">
        {
          products.filter( (product, index) => index < 4 )
          .map( (product) => <ProductCard key={product.id} product={product} />)
        }
      </div>

    </div>
  );
};

export default CategoryPreview;
