import { ButtonBeige, CustomModal } from 'global/styles/GlobalStyledComponents';
import {
  CartContainer,
  CartDisheContainer,
  CartDisheImage,
  CartFinishOrderContainer,
  CartList,
  CartTotalPriceContainer,
  CartTrashIcon,
} from './styles';
import useTypedSelector from 'global/hooks/useTypedSelector';
import formatPrice from 'global/utils/formatPrice';
import { useSelector } from 'react-redux';
import { selectDishesCount } from 'store/Cart/cart.selector';
const Cart = ({ isOpen, onClose }) => {
  const { dishes } = useTypedSelector((rootReducer) => rootReducer.cartReducer);

  const dishesCount = useSelector(selectDishesCount);
  console.log(dishesCount);

  return (
    <CustomModal flexEnd isOpen={isOpen} onClose={onClose}>
      <CartContainer>
        <CartList>
          {dishes.map((dishe, index) => (
            <CartDisheContainer key={dishe.id ?? index}>
              <CartDisheImage>
                <img src={dishe.foto} alt={dishe.nome} />
              </CartDisheImage>
              <h4>{dishe.nome}</h4>
              <span>{formatPrice(dishe.preco ?? 0)}</span>
              <CartTrashIcon>
                <img
                  onClick={onClose}
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
          <div>
            <ButtonBeige>Continuar com a entrega</ButtonBeige>
          </div>
        </CartFinishOrderContainer>
      </CartContainer>
    </CustomModal>
  );
};

export default Cart;
