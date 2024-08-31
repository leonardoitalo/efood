import Header from 'components/Header';
import DishesList from 'components/DishesList';
import { useParams } from 'react-router-dom';
import { IRestaurant } from 'interfaces/IRestaurant';
import useFetchData from 'global/hooks/useFetchData';
import Cart from 'components/Cart';

const RestaurantDishes = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: dishes,
    loading,
    error,
  } = useFetchData<IRestaurant>(
    `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!dishes) return <p>No data available</p>;

  return (
    <>
      {dishes && (
        <Header
          restaurantType={dishes.tipo}
          restaurantTitle={dishes.titulo}
          img={dishes.capa}
          // cart={<Cart />}
        />
      )}
      <DishesList />
    </>
  );
};

export default RestaurantDishes;
