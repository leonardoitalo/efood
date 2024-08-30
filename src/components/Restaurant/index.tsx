import { IRestaurant } from 'interfaces/IRestaurant';
import {
  InfoButton,
  ImgContainer,
  InfoContainer,
  RestaurantContainer,
  InfoHeader,
  Rating,
  Type,
  InfoText,
  InfoTitle,
  Highlighted,
} from './styles';
import { useNavigate } from 'react-router-dom';

const Restaurant = ({
  titulo,
  capa,
  descricao,
  tipo,
  destacado,
  avaliacao,
}: IRestaurant) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/profile');
  };

  return (
    <RestaurantContainer>
      <ImgContainer $bgImg={capa}>
        <Type>{tipo}</Type>
        {destacado ? <Highlighted>Destaque da Semana</Highlighted> : ''}
      </ImgContainer>
      <InfoContainer>
        <InfoHeader>
          <InfoTitle>{titulo}</InfoTitle>
          <Rating>
            <span>{avaliacao}</span>
            <div>
              <img src="imgs/estrela.png" alt="" />
            </div>
          </Rating>
        </InfoHeader>
        <InfoText>{descricao}</InfoText>
        <InfoButton onClick={handleClick}>Saiba mais</InfoButton>
      </InfoContainer>
    </RestaurantContainer>
  );
};

export default Restaurant;
