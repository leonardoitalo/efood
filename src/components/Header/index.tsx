import { IHeader } from 'interfaces/IHeader';
import {
  Cart,
  HeaderContainer,
  HeroRestaurantContainer,
  HeaderTitle,
} from './styles';

const Header = ({ restaurantType, restaurantTitle, img, alt }: IHeader) => {
  return (
    <>
      <HeaderContainer>
        <div>
          <HeaderTitle>Restaurantes</HeaderTitle>
        </div>
        <div>
          <img src={img} alt={alt} />
        </div>
        <div>
          <Cart>0 produto(s) no carrinho</Cart>
        </div>
      </HeaderContainer>
      <HeroRestaurantContainer $bgImg="imgs/image2.png">
        <h1>{restaurantType}</h1>
        <h2>{restaurantTitle}</h2>
      </HeroRestaurantContainer>
    </>
  );
};

export default Header;
