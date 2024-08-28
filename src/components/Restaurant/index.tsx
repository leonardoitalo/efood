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
  title,
  text,
  type,
  highlighted,
  rating,
}: IRestaurant) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/profile');
  };

  return (
    <RestaurantContainer>
      <ImgContainer $bgImg="imgs/imagem.png">
        <Type>{type}</Type>
        {highlighted ? <Highlighted>Destaque da Semana</Highlighted> : ''}
      </ImgContainer>
      <InfoContainer>
        <InfoHeader>
          <InfoTitle>{title}</InfoTitle>
          <Rating>
            <span>{rating}</span>
            <div>
              <img src="imgs/estrela.png" alt="" />
            </div>
          </Rating>
        </InfoHeader>
        <InfoText>{text}</InfoText>
        <InfoButton onClick={handleClick}>Saiba mais</InfoButton>
      </InfoContainer>
    </RestaurantContainer>
  );
};

export default Restaurant;
