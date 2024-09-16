import {
  ButtonBeige,
  CustomModal,
  Form,
  FormButtonContainer,
  FormInput,
  FormInputLabel,
  InputsContainer,
  ModalFormContainer,
} from 'global/styles/GlobalStyledComponents';
import { FormInputSm } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { closeCheckout, openPayment } from 'store/Cart/slice'; // Ação para fechar o checkout
import Payment from 'components/Payment';

const Checkout = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const isCheckoutOpen = useSelector(
    (state: RootState) => state.cart.isCheckoutOpen
  ); // Estado do checkout

  const handleCloseCheckout = () => {
    dispatch(closeCheckout());
    if (onClose) {
      onClose(); // Se houver uma função de fechamento passada via props, ela também é executada
    }
  };

  const handleToPayment = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(closeCheckout());
    dispatch(openPayment());
  };

  return (
    <>
      <CustomModal
        flexEnd
        isOpen={isCheckoutOpen || isOpen}
        onClose={handleCloseCheckout}
      >
        <ModalFormContainer>
          <Form action="">
            <div>
              <h4>Entrega</h4>
            </div>
            <InputsContainer>
              <FormInputLabel>
                <label htmlFor="name">Quem irá receber</label>
                <FormInput type="text" />
              </FormInputLabel>
              <FormInputLabel>
                <label htmlFor="name">Endereço</label>
                <FormInput type="text" />
              </FormInputLabel>
              <FormInputLabel>
                <label htmlFor="name">Cidade</label>
                <FormInput type="text" />
              </FormInputLabel>

              <FormInputSm>
                <FormInputLabel>
                  <label htmlFor="name">CEP</label>
                  <FormInput type="text" />
                </FormInputLabel>
                <FormInputLabel>
                  <label htmlFor="name">Número</label>
                  <FormInput type="text" />
                </FormInputLabel>
              </FormInputSm>

              <FormInputLabel>
                <label htmlFor="name">Complemento (opcional)</label>
                <FormInput type="text" />
              </FormInputLabel>
            </InputsContainer>

            <FormButtonContainer>
              <ButtonBeige onClick={handleToPayment}>
                Continuar com o pagamento
              </ButtonBeige>
              <ButtonBeige onClick={handleCloseCheckout}>
                Voltar para o carrinho
              </ButtonBeige>
            </FormButtonContainer>
          </Form>
        </ModalFormContainer>
      </CustomModal>

      <Payment />
    </>
  );
};

export default Checkout;
