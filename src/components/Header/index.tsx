import {
  Cart,
  HeaderContainer,
  HeroRestaurantContainer,
  HeaderTitle,
} from './styles';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div>
          <HeaderTitle>Restaurantes</HeaderTitle>
        </div>
        <div>
          <img src="imgs/logo.png" alt="" />
        </div>
        <div>
          <Cart>0 produto(s) no carrinho</Cart>
        </div>
      </HeaderContainer>
      <HeroRestaurantContainer $bgImg="imgs/image2.png">
        <h1>Italiana</h1>
        <h2>La Dolce Vita Trattoria</h2>
      </HeroRestaurantContainer>
    </>
  );
};

export default Header;
