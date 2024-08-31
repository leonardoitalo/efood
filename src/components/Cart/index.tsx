import { CustomModal } from 'global/styles/GlobalStyledComponents';
import { CartContainer, CartDisheContainer } from './styles';

const Cart = ({ isOpen, onClose }) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <CartContainer>
        <CartDisheContainer>
          <img src="/imgs/image3.png" alt="" />
          <h4>Pizza Marguerita</h4>
          <span>Pizza Marguerita</span>
          <img onClick={onClose} src="/imgs/lixeira-de-reciclagem.png" alt="" />
        </CartDisheContainer>
        <div>
          <div>
            <h3></h3>
            <span></span>
          </div>
          <div>
            <button></button>
          </div>
        </div>
      </CartContainer>
    </CustomModal>
  );
};

export default Cart;
