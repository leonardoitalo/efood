import Dishe from 'components/Dishe';
import { DishesListContainer } from './styles';
import useFetchData from 'global/hooks/useFetchData';
import { useParams } from 'react-router-dom';
import { IRestaurant } from 'interfaces/IRestaurant';
import { useState } from 'react';
import DisheModal from 'components/DisheModal';
import { IDishe } from 'interfaces/IDishe';

const DishesList = () => {
  const { id } = useParams<{ id: string }>();
  const [showModal, setShowModal] = useState(false);
  const [selectedDishe, setSelectedDishe] = useState<IDishe | null>(null);

  const handleOpen = (dishe: IDishe) => {
    setSelectedDishe(dishe);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedDishe(null);
  };

  const {
    data: dishes,
    loading,
    error,
  } = useFetchData<IRestaurant>(
    `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!dishes?.cardapio) return <p>No data available</p>;

  return (
    <DishesListContainer>
      {dishes.cardapio.map((dishe) => (
        <Dishe
          key={dishe.id}
          nome={dishe.nome}
          descricao={dishe.descricao}
          foto={dishe.foto}
          alt={dishe.nome}
          openModal={() => handleOpen(dishe)}
        />
      ))}

      {selectedDishe && (
        <DisheModal
          isOpen={showModal}
          onClose={handleClose}
          id={selectedDishe.id}
          foto={selectedDishe.foto}
          nome={selectedDishe.nome}
          descricao={selectedDishe.descricao}
          porcao={selectedDishe.porcao}
          preco={selectedDishe.preco}
          alt={selectedDishe.nome}
        />
      )}
    </DishesListContainer>
  );
};

export default DishesList;
