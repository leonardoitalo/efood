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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { FormInputLg } from './styles';
import {
  closePayment,
  openCheckout,
  openConfirmMessage,
} from 'store/Cart/slice';
import { FormInputSm } from 'components/Checkout/styles';
import ConfirmMessage from 'components/ConfirmMessage';

const Payment = () => {
  const dispatch = useDispatch();

  const isPaymentOpen = useSelector(
    (state: RootState) => state.cart.isPaymentOpen
  );

  const handleClosePayment = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(closePayment());
    dispatch(openConfirmMessage());
  };

  const handleToCheckout = () => {
    dispatch(closePayment());
    dispatch(openCheckout());
  };

  return (
    <>
      <CustomModal flexEnd isOpen={isPaymentOpen}>
        <ModalFormContainer>
          <Form>
            <div>
              <h4>Pagamento - Valor a pagar R$ 190,90</h4>
            </div>
            <InputsContainer>
              <FormInputLabel>
                <label htmlFor="">Nome do cartao</label>
                <FormInput type="text" name="" id="" />
              </FormInputLabel>

              <FormInputLg>
                <FormInputLabel>
                  <label htmlFor="">Número do cartão</label>
                  <FormInput />
                </FormInputLabel>
                <FormInputLabel>
                  <label htmlFor="">CVV</label>
                  <FormInput />
                </FormInputLabel>
              </FormInputLg>

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
            </InputsContainer>
            <FormButtonContainer>
              <ButtonBeige onClick={handleClosePayment}>
                Finalizar pagamento
              </ButtonBeige>
              <ButtonBeige onClick={handleToCheckout}>
                Voltar para a edição de endereço
              </ButtonBeige>
            </FormButtonContainer>
          </Form>
        </ModalFormContainer>
      </CustomModal>

      <ConfirmMessage />
    </>
  );
};

export default Payment;
