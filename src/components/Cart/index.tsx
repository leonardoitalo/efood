import { ButtonBeige, CustomModal } from 'global/styles/GlobalStyledComponents';
import {
  CartButtonsContainer,
  CartContainer,
  CartDisheContainer,
  CartDisheImage,
  CartFinishOrderContainer,
  CartList,
  CartTotalPriceContainer,
  CartTrashIcon,
} from './styles';
import formatPrice from 'global/utils/formatPrice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import {
  removeDishe,
  closeCart,
  openCheckout,
  closeCheckout,
} from 'store/Cart/slice'; // Importando as ações
import Checkout from 'components/Checkout';

const Cart = () => {
  const dishes = useSelector((state: RootState) => state.cart.dishes);
  const dishesCount = useSelector(
    (state: RootState) => state.cart.dishes.length
  );
  const isCartOpen = useSelector((state: RootState) => state.cart.isCartOpen);
  const isCheckoutOpen = useSelector(
    (state: RootState) => state.cart.isCheckoutOpen
  );
  const dispatch = useDispatch();

  const handleRemoveDishe = (id: number) => {
    dispatch(removeDishe(id));
  };

  const handleOpenCheckout = () => {
    dispatch(closeCart()); // Fecha o carrinho
    dispatch(openCheckout()); // Abre o checkout
  };

  const handleCloseCart = () => {
    dispatch(closeCart());
  };

  return (
    <>
      <CustomModal flexEnd isOpen={isCartOpen} onClose={handleCloseCart}>
        <CartContainer>
          <CartList>
            {dishes.map((dishe, index) => (
              <CartDisheContainer key={dishe.id ?? index}>
                <CartDisheImage>
                  <img src={dishe.foto} alt={dishe.nome} />
                </CartDisheImage>
                <div>
                  <h4>{dishe.nome}</h4>
                  <span>{formatPrice(dishe.preco ?? 0)}</span>
                </div>
                <CartTrashIcon>
                  <img
                    onClick={() => handleRemoveDishe(dishe.id ?? 0)}
                    src="/imgs/lixeira-de-reciclagem.png"
                    alt="Icone de lixeira"
                  />
                </CartTrashIcon>
              </CartDisheContainer>
            ))}
          </CartList>
          <CartFinishOrderContainer>
            <CartTotalPriceContainer>
              <h3>Valor total:</h3>
              <span>{formatPrice(dishesCount)}</span>
            </CartTotalPriceContainer>
            <CartButtonsContainer>
              <ButtonBeige onClick={handleOpenCheckout}>
                Continuar com a entrega
              </ButtonBeige>
              <ButtonBeige onClick={handleCloseCart}>
                Fechar Carrinho
              </ButtonBeige>
            </CartButtonsContainer>
          </CartFinishOrderContainer>
        </CartContainer>
      </CustomModal>

      {/* O Checkout é exibido quando o estado isCheckoutOpen é verdadeiro */}
      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => dispatch(closeCheckout())}
      />
    </>
  );
};

export default Cart;
