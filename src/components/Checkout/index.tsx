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

const Checkout = ({ isOpen, onClose }) => {
  return (
    <CustomModal flexEnd isOpen={isOpen} onClose={onClose}>
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
            <ButtonBeige>Voltar para o carrinho</ButtonBeige>
          </FormButtonContainer>
        </Form>
      </CheckoutContainer>
    </CustomModal>
  );
};

export default Checkout;
