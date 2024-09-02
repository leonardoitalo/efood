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
              <div>
                <label htmlFor="name">Quem irá receber</label>
              </div>
              <div>
                <FormInput type="text" />
              </div>
            </FormInputLabel>
            <FormInputLabel>
              <label htmlFor="name">Endereço</label>
              <div>
                <FormInput type="text" />
              </div>
            </FormInputLabel>
            <FormInputLabel>
              <label htmlFor="name">Cidade</label>
              <div>
                <FormInput type="text" />
              </div>
            </FormInputLabel>

            <FormInputContainerMid>
              <FormInputLabel>
                <label htmlFor="name">CEP</label>
                <div>
                  <FormInput type="text" />
                </div>
              </FormInputLabel>
              <FormInputLabel>
                <label htmlFor="name">Número</label>
                <div>
                  <FormInput type="text" />
                </div>
              </FormInputLabel>
            </FormInputContainerMid>

            <FormInputLabel>
              <label htmlFor="name">Complemento (opcional)</label>
              <div>
                <FormInput type="text" />
              </div>
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
