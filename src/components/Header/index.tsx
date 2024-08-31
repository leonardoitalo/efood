import { IHeader } from 'interfaces/IHeader';
import {
  Cart,
  HeaderContainer,
  HeroRestaurantContainer,
  HeaderTitle,
} from './styles';
import useTypedSelector from 'global/hooks/useTypedSelector';

const Header = ({ restaurantType, restaurantTitle, img }: IHeader) => {
  const { dishes } = useTypedSelector((rootReducer) => rootReducer.cartReducer);

  console.log(dishes);

  return (
    <>
      <HeaderContainer>
        <div>
          <HeaderTitle to={'/'}>Restaurantes</HeaderTitle>
        </div>
        <div>
          <img src="/imgs/logo.png" alt="logo efood" />
        </div>
        <div>
          <Cart>{dishes.length} produto(s) no carrinho</Cart>
        </div>
      </HeaderContainer>
      <HeroRestaurantContainer $bgImg={img}>
        <h1>{restaurantType}</h1>
        <h2>{restaurantTitle}</h2>
      </HeroRestaurantContainer>
    </>
  );
};

export default Header;
