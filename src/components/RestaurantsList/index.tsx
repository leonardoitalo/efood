import Restaurant from 'components/Restaurant';
import { RestaurantsListContainer } from './styles';
import { IRestaurant } from 'interfaces/IRestaurant';
import useFetchData from 'global/hooks/useFetchData';

const RestaurantsList = () => {
  const {
    data: restaurants,
    loading,
    error,
  } = useFetchData<IRestaurant[]>(
    'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!restaurants) return <p>No data available</p>;

  return (
    <RestaurantsListContainer>
      {restaurants.map(
        ({ id, titulo, capa, tipo, avaliacao, destacado, descricao }) => (
          <Restaurant
            id={id}
            key={id}
            titulo={titulo}
            capa={capa}
            tipo={tipo}
            avaliacao={avaliacao}
            destacado={destacado}
            descricao={descricao}
          />
        )
      )}
    </RestaurantsListContainer>
  );
};

export default RestaurantsList;
