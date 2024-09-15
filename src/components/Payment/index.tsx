import { CustomModal } from 'global/styles/GlobalStyledComponents';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

const Payment = () => {
  const isPaymentOpen = useSelector(
    (state: RootState) => state.cart.isPaymentOpen
  );

  return (
    <CustomModal flexEnd isOpen={isPaymentOpen}>
      <div>
        <h1>payment</h1>
      </div>
    </CustomModal>
  );
};

export default Payment;
