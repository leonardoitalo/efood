import { ButtonBeige, CustomModal } from 'global/styles/GlobalStyledComponents';
import {
  CheckoutContainer,
  Form,
  FormButtonContainer,
  FormInput,
  FormInputContainerMid,
  FormInputLabel,
  InputsContainer,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { closeCheckout } from 'store/Cart/slice'; // Ação para fechar o checkout

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

  return (
    <CustomModal
      flexEnd
      isOpen={isCheckoutOpen || isOpen}
      onClose={handleCloseCheckout}
    >
      <CheckoutContainer>
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

            <FormInputContainerMid>
              <FormInputLabel>
                <label htmlFor="name">CEP</label>
                <FormInput type="text" />
              </FormInputLabel>
              <FormInputLabel>
                <label htmlFor="name">Número</label>
                <FormInput type="text" />
              </FormInputLabel>
            </FormInputContainerMid>

            <FormInputLabel>
              <label htmlFor="name">Complemento (opcional)</label>
              <FormInput type="text" />
            </FormInputLabel>
          </InputsContainer>

          <FormButtonContainer>
            <ButtonBeige>Continuar com o pagamento</ButtonBeige>
            <ButtonBeige onClick={handleCloseCheckout}>
              Voltar para o carrinho
            </ButtonBeige>
          </FormButtonContainer>
        </Form>
      </CheckoutContainer>
    </CustomModal>
  );
};

export default Checkout;
