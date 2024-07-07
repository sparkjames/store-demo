import DirectoryItem from '../directory-item/directory-item';
// import './directory.styles.scss';
import { DirectoryContainer } from './directory.styles';

const Directory = ({categories}) => {
  return (
    <DirectoryContainer>

      {categories.map(((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      }))}

    </DirectoryContainer>
  );
}

export default Directory;
