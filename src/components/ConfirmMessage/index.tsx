import { ButtonBeige, CustomModal } from 'global/styles/GlobalStyledComponents';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { ConfirmMessageContainer, ConfirmMessageText } from './styles';
import { closeConfirmMessage } from 'store/Cart/slice';

const ConfirmMessage = () => {
  const dispatch = useDispatch();
  const isConfirmMessageOpen = useSelector(
    (state: RootState) => state.cart.isConfirmMessageOpen
  );

  const handleCloseConfirmMessage = () => {
    dispatch(closeConfirmMessage());
  };

  return (
    <CustomModal flexEnd isOpen={isConfirmMessageOpen}>
      <ConfirmMessageContainer>
        <div>
          <h4>Pedido realizado - ORDER_ID</h4>
        </div>
        <ConfirmMessageText>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
        </ConfirmMessageText>
        <ButtonBeige onClick={handleCloseConfirmMessage}>Concluir</ButtonBeige>
      </ConfirmMessageContainer>
    </CustomModal>
  );
};

export default ConfirmMessage;
