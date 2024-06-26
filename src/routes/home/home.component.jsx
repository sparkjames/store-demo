import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory';

const Home = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
      description: 'Shop Now',
      imageURL: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: 'Jackets',
      description: 'Shop Now',
      imageURL: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: 'Sneakers',
      description: 'Shop Now',
      imageURL: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: 'Women\'s',
      description: 'Shop Now',
      imageURL: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: 'Men\'s',
      description: 'Shop Now',
      imageURL: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <div className='home-container'>
      <Directory categories={categories} />
      <Outlet />
    </div>

  );
}

export default Home;
