import './category-item.styles.scss';

const CategoryItem = ({category}) => {
  const {imageURL, title, description} = category;
  return (
    <div className="category">
      <img className="category-image" src={imageURL} alt={title} />
      <div className="category-body">
        <h2 className="category-name">{title}</h2>
        <p className="category-description">{description}</p>
      </div>
    </div>
  );
}

export default CategoryItem;