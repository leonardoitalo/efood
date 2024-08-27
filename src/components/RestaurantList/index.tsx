import { IRestaurant } from 'interfaces/IRestaurant';
import {
  ButtonInfo,
  ContainerImg,
  ContainerInfo,
  ContainerRestaurant,
  HeaderInfo,
  Rating,
  Tag,
  TextInfo,
  TitleInfo,
} from './styles';

const RestaurantList = ({ title, text, tags, rating }: IRestaurant) => {
  return (
    <ContainerRestaurant>
      <ContainerImg $bgImg="imgs/imagem.png">
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </ContainerImg>
      <ContainerInfo>
        <HeaderInfo>
          <TitleInfo>{title}</TitleInfo>
          <Rating>
            <span>{rating}</span>
            <div>
              <img src="imgs/estrela.png" alt="" />
            </div>
          </Rating>
        </HeaderInfo>
        <TextInfo>{text}</TextInfo>
        <ButtonInfo>Saiba mais</ButtonInfo>
      </ContainerInfo>
    </ContainerRestaurant>
  );
};

export default RestaurantList;
