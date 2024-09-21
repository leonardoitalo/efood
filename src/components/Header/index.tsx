import { IHeader } from 'interfaces/IHeader';
import {
  HeaderCartLength,
  HeaderContainer,
  HeroRestaurantContainer,
  HeaderTitle,
  HeaderImg,
} from './styles';
import Cart from 'components/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { openCart } from 'store/Cart/slice'; // Ação apenas para abrir o carrinho

const Header = ({ restaurantType, restaurantTitle, img }: IHeader) => {
  const dishes = useSelector((state: RootState) => state.cart.dishes);
  const dispatch = useDispatch();

  const handleOpenCart = () => {
    if (dishes.length > 0) {
      dispatch(openCart()); // Abre o carrinho
    } else {
      alert('Adicione pedidos no carrinho!');
    }
  };

  return (
    <>
      <HeaderContainer>
        <div>
          <HeaderTitle to={'/'}>Restaurantes</HeaderTitle>
        </div>
        <HeaderImg>
          <img src="/imgs/logo.png" alt="logo efood" />
        </HeaderImg>
        <div>
          <HeaderCartLength onClick={handleOpenCart}>
            {dishes.length} produto(s) no carrinho
          </HeaderCartLength>
          <Cart /> {/* O estado do carrinho será controlado pelo Redux */}
        </div>
      </HeaderContainer>
      <div>
        <HeroRestaurantContainer $bgImg={img}>
          <h1>{restaurantType}</h1>
          <h2>{restaurantTitle}</h2>
        </HeroRestaurantContainer>
      </div>
    </>
  );
};

export default Header;
