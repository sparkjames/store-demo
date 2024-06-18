import DirectoryItem from '../directory-item/directory-item';
import './directory.styles.scss';

const Directory = ({categories}) => {
  return (
    <div className="directory">

      {categories.map(((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      }))}

    </div>
  );
}

export default Directory;
