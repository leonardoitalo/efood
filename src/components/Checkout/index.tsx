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
import {
  closeCheckout,
  openPayment,
  RequestData,
  setDeliveryData,
} from 'store/Cart/slice';
import Payment from 'components/Payment';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

const Checkout = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const isCheckoutOpen = useSelector(
    (state: RootState) => state.cart.isCheckoutOpen
  );

  const { register, handleSubmit, reset, watch } = useForm<RequestData>();

  const handleCloseCheckout = () => {
    dispatch(closeCheckout());
    if (onClose) {
      onClose();
    }
  };

  const handleToPayment = (data: RequestData) => {
    dispatch(
      setDeliveryData({
        receiver: data.receiver,
        address: {
          description: data.address.description,
          city: data.address.city,
          zipCode: data.address.zipCode,
          number: data.address.number,
          complement: data.address.complement || '',
        },
      })
    );
    dispatch(closeCheckout());
    dispatch(openPayment());
    reset(); // Limpa os campos do formulário
  };

  console.log(watch());

  return (
    <>
      <CustomModal
        flexEnd
        isOpen={isCheckoutOpen || isOpen}
        onClose={handleCloseCheckout}
      >
        <ModalFormContainer>
          <Form onSubmit={handleSubmit(handleToPayment)}>
            <div>
              <h4>Entrega</h4>
            </div>
            <InputsContainer>
              <FormInputLabel>
                <label htmlFor="receiver">Quem irá receber</label>
                <FormInput
                  type="text"
                  {...register('receiver', { required: true })}
                />
              </FormInputLabel>
              <FormInputLabel>
                <label htmlFor="address">Endereço</label>
                <FormInput
                  type="text"
                  {...register('address', { required: true })}
                />
              </FormInputLabel>
              <FormInputLabel>
                <label htmlFor="address.city">Cidade</label>
                <FormInput
                  type="text"
                  {...register('address.city', { required: true })}
                />
              </FormInputLabel>

              <FormInputSm>
                <FormInputLabel>
                  <label htmlFor="address.zipCode">CEP</label>
                  <InputMask
                    mask="99999-999"
                    {...register('address.zipCode')}
                    type="text"
                  />
                </FormInputLabel>
                <FormInputLabel>
                  <label htmlFor="address.number">Número</label>
                  <FormInput
                    type="text"
                    {...register('address.number', { required: true })}
                  />
                </FormInputLabel>
              </FormInputSm>

              <FormInputLabel>
                <label htmlFor="address.complement">
                  Complemento (opcional)
                </label>
                <FormInput type="text" {...register('address.complement')} />
              </FormInputLabel>
            </InputsContainer>

            <FormButtonContainer>
              <ButtonBeige type="submit">Continuar com o pagamento</ButtonBeige>
              <ButtonBeige type="button" onClick={handleCloseCheckout}>
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
