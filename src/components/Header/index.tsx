import { IHeader } from 'interfaces/IHeader';
import {
  HeaderCartLength,
  HeaderContainer,
  HeroRestaurantContainer,
  HeaderTitle,
} from './styles';
import useTypedSelector from 'global/hooks/useTypedSelector';
import Cart from 'components/Cart';
import { useState } from 'react';

const Header = ({ restaurantType, restaurantTitle, img }: IHeader) => {
  const { dishes } = useTypedSelector((rootReducer) => rootReducer.cartReducer);
  const [showCart, setShowCart] = useState(false);

  const handleOpenCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

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
          <HeaderCartLength onClick={handleOpenCart}>
            {dishes.length} produto(s) no carrinho
          </HeaderCartLength>
          <Cart isOpen={showCart} onClose={handleCloseCart} />
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
