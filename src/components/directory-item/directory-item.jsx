// import './directory-item.styles.scss';
import { DirectoryItemContainer, DirectoryItemImage, DirectoryItemBody, DirectoryItemName, DirectoryItemDescription } from './directory-item.styles';

const DirectoryItem = ({category}) => {
  const {imageURL, title, description} = category;
  return (
    <DirectoryItemContainer>
      <DirectoryItemImage src={imageURL} alt={title} />
      <DirectoryItemBody>
        <DirectoryItemName>{title}</DirectoryItemName>
        <DirectoryItemDescription>{description}</DirectoryItemDescription>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;
