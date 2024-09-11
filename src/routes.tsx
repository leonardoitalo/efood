import Layout from 'components/Layout';
import Home from 'pages/Home';
import RestaurantDishes from 'pages/RestaurantDishes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="restaurant/:id" element={<RestaurantDishes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
