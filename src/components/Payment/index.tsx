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
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { FormInputLg } from './styles';

const Payment = () => {
  const isPaymentOpen = useSelector(
    (state: RootState) => state.cart.isPaymentOpen
  );

  return (
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

            <FormInputLg>
              <FormInputLabel>
                <label htmlFor="name">CEP</label>
                <FormInput type="text" />
              </FormInputLabel>
              <FormInputLabel>
                <label htmlFor="name">Número</label>
                <FormInput type="text" />
              </FormInputLabel>
            </FormInputLg>
          </InputsContainer>
          <FormButtonContainer>
            <ButtonBeige>Finalizar pagamento</ButtonBeige>
            <ButtonBeige>Voltar para a edição de endereço</ButtonBeige>
          </FormButtonContainer>
        </Form>
      </ModalFormContainer>
    </CustomModal>
  );
};

export default Payment;
