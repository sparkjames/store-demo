import CategoryItem from '../category-item/category-item';
import './directory.styles.scss';

const Directory = ({categories}) => {
  return (
    <div className="directory">

      {categories.map(((category) => {
        return <CategoryItem key={category.id} category={category} />;
      }))}

    </div>
  );
}

export default Directory;