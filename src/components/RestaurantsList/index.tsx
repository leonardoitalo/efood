import Restaurant from 'components/Restaurant';
import { RestaurantsListContainer } from './styles';

import { useGetRestaurantQuery } from 'services/api';

const RestaurantsList = () => {
  const { data: restaurants, isLoading } = useGetRestaurantQuery();

  if (isLoading) return <p>Loading...</p>;
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
