import Dishe from 'components/Dishe';
import { DishesListContainer } from './styles';
import useFetchData from 'global/hooks/useFetchData';
import { useParams } from 'react-router-dom';
import { IRestaurant } from 'interfaces/IRestaurant';

const DishesList = () => {
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
    <DishesListContainer>
      {dishes.cardapio.map(({ id, nome, descricao, foto }) => (
        <Dishe
          key={id}
          nome={nome}
          descricao={descricao}
          foto={foto}
          alt={nome}
        />
      ))}
    </DishesListContainer>
  );
};

export default DishesList;
