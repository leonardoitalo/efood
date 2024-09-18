import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { FormInputLg } from './styles';
import { FormInputSm } from 'components/Checkout/styles';
import ConfirmMessage from 'components/ConfirmMessage';
import { useSubmitOrderMutation } from 'services/api';
import { selectDishesCount } from 'store/Cart/cart.selector';
import formatPrice from 'global/utils/formatPrice';
import { IPaymentData } from 'interfaces/IPaymentData';
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
import {
  closePayment,
  openCheckout,
  openConfirmMessage,
  setOrderId,
} from 'store/Cart/slice';

const Payment = () => {
  const dispatch = useDispatch();
  const dishesCount = useSelector(selectDishesCount);
  const [submitOrder] = useSubmitOrderMutation();
  const deliveryData = useSelector(
    (state: RootState) => state.cart.deliveryData
  );
  const dishes = useSelector((state: RootState) => state.cart.dishes);

  const { register, handleSubmit, reset } = useForm<IPaymentData>();

  const isPaymentOpen = useSelector(
    (state: RootState) => state.cart.isPaymentOpen
  );

  const handleClosePayment = async (data: IPaymentData) => {
    if (!deliveryData) {
      console.error('Dados de entrega ausentes');
      return;
    }

    const DeliveryData = {
      products: dishes,
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
      const response = await submitOrder(DeliveryData).unwrap();
      dispatch(setOrderId(response.orderId));
      dispatch(closePayment());

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
              <h4>Pagamento - Valor a pagar {formatPrice(dishesCount)}</h4>
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
                    mask="99"
                    type="text"
                    {...register('month', { required: true })}
                  />
                </FormInputLabel>
                <FormInputLabel>
                  <label htmlFor="number">Ano de vencimento</label>
                  <InputMask
                    mask="9999"
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
