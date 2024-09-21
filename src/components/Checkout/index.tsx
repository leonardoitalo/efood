import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import {
  closeCheckout,
  openCart,
  openPayment,
  setDeliveryData,
} from 'store/Cart/slice';
import Payment from 'components/Payment';
import { IDeliveryData } from 'interfaces/IDeliveryData';
import { FormInputSm } from './styles';
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

const Checkout = () => {
  const dispatch = useDispatch();
  const isCheckoutOpen = useSelector(
    (state: RootState) => state.cart.isCheckoutOpen
  );

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IDeliveryData>();

  const handleCloseCheckout = () => {
    dispatch(closeCheckout());
    dispatch(openCart());
  };

  const handleToPayment = (data: IDeliveryData) => {
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
        isOpen={isCheckoutOpen}
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
                  {...register('receiver', {
                    required: 'Nome do recebedor é obrigatório',
                  })}
                />
                {errors.receiver && <span>{errors.receiver.message}</span>}
              </FormInputLabel>
              <FormInputLabel>
                <label htmlFor="address.description">Endereço</label>
                <FormInput
                  type="text"
                  {...register('address.description', {
                    required: 'Endereço é obrigatório',
                  })}
                />
                {errors.address?.description && (
                  <span>{errors.address.description.message}</span>
                )}
              </FormInputLabel>
              <FormInputLabel>
                <label htmlFor="address.city">Cidade</label>
                <FormInput
                  type="text"
                  {...register('address.city', {
                    required: 'Cidade é obrigatória',
                  })}
                />
                {errors.address?.city && (
                  <span>{errors.address.city.message}</span>
                )}
              </FormInputLabel>

              <FormInputSm>
                <FormInputLabel>
                  <label htmlFor="address.zipCode">CEP</label>
                  <InputMask
                    mask="99999-999"
                    {...register('address.zipCode', {
                      required: 'CEP é obrigatório',
                      pattern: {
                        value: /^[0-9]{5}-[0-9]{3}$/,
                        message: 'Formato de CEP inválido',
                      },
                    })}
                    type="text"
                  />
                  {errors.address?.zipCode && (
                    <span>{errors.address.zipCode.message}</span>
                  )}
                </FormInputLabel>
                <FormInputLabel>
                  <label htmlFor="address.number">Número</label>
                  <FormInput
                    type="text"
                    {...register('address.number', {
                      required: 'Número é obrigatório',
                    })}
                  />
                  {errors.address?.number && (
                    <span>{errors.address.number.message}</span>
                  )}
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
