import './directory-item.styles.scss';

const DirectoryItem = ({category}) => {
  const {imageURL, title, description} = category;
  return (
    <div className="directory-item">
      <img className="directory-item-image" src={imageURL} alt={title} />
      <div className="directory-item-body">
        <h2 className="directory-item-name">{title}</h2>
        <p className="directory-item-description">{description}</p>
      </div>
    </div>
  );
}

export default DirectoryItem;
