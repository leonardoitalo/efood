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
  PaymentData,
} from 'store/Cart/slice';
import { FormInputSm } from 'components/Checkout/styles';
import ConfirmMessage from 'components/ConfirmMessage';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { useSubmitOrderMutation } from 'services/api';

const Payment = () => {
  const dispatch = useDispatch();
  const [submitOrder, { isLoading, isSuccess, isError }] =
    useSubmitOrderMutation();
  const deliveryData = useSelector(
    (state: RootState) => state.cart.deliveryData
  );
  const dishes = useSelector((state: RootState) => state.cart.dishes);

  const { register, handleSubmit, reset } = useForm<PaymentData>();

  const isPaymentOpen = useSelector(
    (state: RootState) => state.cart.isPaymentOpen
  );

  const handleClosePayment = async (data: PaymentData) => {
    if (!deliveryData) {
      console.error('Dados de entrega ausentes');
      return; // Interrompa o envio se não houver dados de entrega
    }

    const requestData = {
      products: dishes, // Adicione os produtos se necessário
      delivery: deliveryData,
      payment: {
        card: {
          name: data.name,
          number: data.numberCard,
          code: Number(data.cvv),
          expires: {
            month: 9,
            year: 2024,
          },
        },
      },
    };

    try {
      const response = await submitOrder(requestData).unwrap();
      console.log('Pedido realizado com sucesso:', response);
      dispatch(closePayment());
      console.log(requestData);

      // Lógica adicional em caso de sucesso
    } catch (error) {
      // Lógica de erro
      console.error('Erro ao enviar o pedido:', error);
    }

    dispatch(closePayment());
    dispatch(openConfirmMessage());
    reset();
  };

  const handleToCheckout = () => {
    dispatch(closePayment());
    dispatch(openCheckout());
  };

  return (
    <>
      <CustomModal flexEnd isOpen={isPaymentOpen}>
        <ModalFormContainer>
          <Form onSubmit={handleSubmit(handleClosePayment)}>
            <div>
              <h4>Pagamento - Valor a pagar R$ 190,90</h4>
            </div>
            <InputsContainer>
              <FormInputLabel>
                <label htmlFor="">Nome do cartao</label>
                <FormInput
                  type="text"
                  {...register('name', { required: true })}
                />
              </FormInputLabel>

              <FormInputLg>
                <FormInputLabel>
                  <label htmlFor="numberCard">Número do cartão</label>
                  <InputMask
                    mask="9999 9999 9999 9999"
                    type="text"
                    {...register('numberCard', { required: true })}
                  />
                </FormInputLabel>
                <FormInputLabel>
                  <label htmlFor="cvv">CVV</label>
                  <InputMask
                    mask="999"
                    type="text"
                    {...register('cvv', { required: true })}
                  />
                </FormInputLabel>
              </FormInputLg>

              <FormInputSm>
                <FormInputLabel>
                  <label htmlFor="month">Mês de vencimento</label>
                  <InputMask
                    mask="99999-999"
                    type="text"
                    {...register('month', { required: true })}
                  />
                </FormInputLabel>
                <FormInputLabel>
                  <label htmlFor="number">Ano de vencimento</label>
                  <FormInput
                    type="year"
                    {...register('year', { required: true })}
                  />
                </FormInputLabel>
              </FormInputSm>
            </InputsContainer>
            <FormButtonContainer>
              <ButtonBeige type="submit">Finalizar pagamento</ButtonBeige>
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
