import { ButtonBeige, CustomModal } from 'global/styles/GlobalStyledComponents';
import {
  CartContainer,
  CartDisheContainer,
  CartFinishOrderContainer,
  CartList,
  CartTotalPriceContainer,
  CartTrashIcon,
} from './styles';

const Cart = ({ isOpen, onClose }) => {
  return (
    <CustomModal flexEnd isOpen={isOpen} onClose={onClose}>
      <CartContainer>
        <CartList>
          <CartDisheContainer>
            <img src="/imgs/image3.png" alt="" />
            <h4>Pizza Marguerita</h4>
            <span>R$ 60,90</span>
            <CartTrashIcon
              onClick={onClose}
              src="/imgs/lixeira-de-reciclagem.png"
              alt=""
            />
          </CartDisheContainer>
          <CartDisheContainer>
            <img src="/imgs/image3.png" alt="" />
            <h4>Pizza Marguerita</h4>
            <span>R$ 60,90</span>
          </CartDisheContainer>
          <CartDisheContainer>
            <img src="/imgs/image3.png" alt="" />
            <h4>Pizza Marguerita</h4>
            <span>R$ 60,90</span>
          </CartDisheContainer>
        </CartList>

        <CartFinishOrderContainer>
          <CartTotalPriceContainer>
            <h3>Valor total</h3>
            <span>R$ 182,70</span>
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
