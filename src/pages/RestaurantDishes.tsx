import Header from 'components/Header';
import DishesList from 'components/DishesList';
import { useParams } from 'react-router-dom';
import { useGetDishesQuery } from 'services/api';

const RestaurantDishes = () => {
  const { id } = useParams<{ id: string }>();
  const { data: dishes } = useGetDishesQuery(id!);

  return (
    <>
      {dishes && (
        <Header
          restaurantType={dishes.tipo}
          restaurantTitle={dishes.titulo}
          img={dishes.capa}
        />
      )}
      <DishesList />
    </>
  );
};

export default RestaurantDishes;
