import { IRestaurant } from 'interfaces/IRestaurant';
import {
  InfoButton,
  ImgContainer,
  InfoContainer,
  RestaurantContainer,
  InfoHeader,
  Rating,
  Tag,
  InfoText,
  InfoTitle,
} from './styles';

const Restaurant = ({ title, text, tags, rating }: IRestaurant) => {
  return (
    <RestaurantContainer>
      <ImgContainer $bgImg="imgs/imagem.png">
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
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
        <InfoButton>Saiba mais</InfoButton>
      </InfoContainer>
    </RestaurantContainer>
  );
};

export default Restaurant;
