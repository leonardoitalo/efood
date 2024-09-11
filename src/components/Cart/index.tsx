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
import { selectDishesCount } from 'store/Cart/cart.selector';
import { RootState } from 'store/store';
import { removeDishe } from 'store/Cart/slice';

const Cart = ({ isOpen, onClose }) => {
  const dishes = useSelector((state: RootState) => state.cart.dishes);
  const dishesCount = useSelector(selectDishesCount);
  const dispatch = useDispatch();

  const handleRemoveDishe = (id: number) => {
    dispatch(removeDishe(id));
  };

  return (
    <CustomModal flexEnd isOpen={isOpen} onClose={onClose}>
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
            <ButtonBeige>Continuar com a entrega</ButtonBeige>
            <ButtonBeige onClick={onClose}>Fechar Carrinho</ButtonBeige>
          </CartButtonsContainer>
        </CartFinishOrderContainer>
      </CartContainer>
      {}
    </CustomModal>
  );
};

export default Cart;
