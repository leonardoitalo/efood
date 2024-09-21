import { IDeliveryData } from './IDeliveryData';
import { IDishe } from './IDishe';
import { IPaymentData } from './IPaymentData';

export interface ICartState {
  dishes: IDishe[];
  isCartOpen: boolean;
  isCheckoutOpen: boolean;
  isPaymentOpen: boolean;
  isConfirmMessageOpen: boolean;
  deliveryData: IDeliveryData | null;
  paymentData: IPaymentData | null;
  orderId: string | null;
}
