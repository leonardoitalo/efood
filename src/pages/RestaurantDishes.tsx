import Header from 'components/Header';
import DishesList from 'components/DishesList';

const RestaurantDishes = () => {
  return (
    <>
      <Header
        restaurantTitle="La Dolce Vita Trattoria"
        restaurantType="Italiana"
        img="imgs/image2.png"
      />
      <DishesList />
    </>
  );
};

export default RestaurantDishes;
