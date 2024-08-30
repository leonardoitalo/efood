import Restaurant from 'components/Restaurant';
import { RestaurantsListContainer } from './styles';
import { IRestaurant } from 'interfaces/IRestaurant';
// import { useEffect, useState } from 'react';
import useFetchData from 'global/hooks/useFetchData';

const RestaurantsList = () => {
  // const [restaurant, setRestaurant] = useState<IRestaurant[]>([]);
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  //       );
  //       const data = await response.json();
  //       setRestaurant(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <RestaurantsListContainer>
      {restaurants.map(
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
