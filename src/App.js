import Home from './routes/home/home.component';
import MainLayout from './routes/main-layout/main-layout.component.jsx';
import { Routes, Route } from 'react-router-dom';
// import './App.scss';

const Shop = () => {
  return (
    <h1>Shop page</h1>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
