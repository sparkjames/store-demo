import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import MainLayout from './routes/main-layout/main-layout.component.jsx';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import CheckOut from './routes/checkout/checkout.component';

// import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Route>
    </Routes>
  );
}

export default App;
