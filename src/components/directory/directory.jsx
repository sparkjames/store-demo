import DirectoryItem from '../directory-item/directory-item';
// import './directory.styles.scss';
import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'Hats',
    description: 'Shop Now',
    imageURL: "https://i.ibb.co/cvpntL1/hats.png",
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'Jackets',
    description: 'Shop Now',
    imageURL: "https://i.ibb.co/px2tCc3/jackets.png",
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'Sneakers',
    description: 'Shop Now',
    imageURL: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'Women\'s',
    description: 'Shop Now',
    imageURL: "https://i.ibb.co/GCCdy8t/womens.png",
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'Men\'s',
    description: 'Shop Now',
    imageURL: "https://i.ibb.co/R70vBrQ/men.png",
    route: 'shop/mens',
  },
];

const Directory = () => {
  
  return (
    <DirectoryContainer>

      {categories.map(((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      }))}

    </DirectoryContainer>
  );
}

export default Directory;
