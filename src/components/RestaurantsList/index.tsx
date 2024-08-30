import Restaurant from 'components/Restaurant';
import { RestaurantsListContainer } from './styles';
import { IRestaurant } from 'interfaces/IRestaurant';
import { useEffect, useState } from 'react';

const RestaurantsList = () => {
  const [restaurant, setRestaurant] = useState<IRestaurant[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://fake-api-tau.vercel.app/api/efood/restaurantes'
        );
        const data = await response.json();
        setRestaurant(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <RestaurantsListContainer>
      {restaurant.map(
        ({ id, titulo, capa, tipo, avaliacao, destacado, descricao }) => (
          <Restaurant
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
