import {
  Cart,
  ContainerHeader,
  ContainerHeroRestaurant,
  TitleHeader,
} from './styles';

const Header = () => {
  return (
    <>
      <ContainerHeader>
        <div>
          <TitleHeader>Restaurantes</TitleHeader>
        </div>
        <div>
          <img src="imgs/logo.png" alt="" />
        </div>
        <div>
          <Cart>0 produto(s) no carrinho</Cart>
        </div>
      </ContainerHeader>
      <ContainerHeroRestaurant $bgImg="imgs/image2.png">
        <h5>Italiana</h5>
        <h6>La Dolce Vita Trattoria</h6>
      </ContainerHeroRestaurant>
    </>
  );
};

export default Header;
