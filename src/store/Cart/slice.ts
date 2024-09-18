import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDishe } from 'interfaces/IDishe';

interface CartState {
  dishes: IDishe[];
  isCartOpen: boolean;
  isCheckoutOpen: boolean;
  isPaymentOpen: boolean;
  isConfirmMessageOpen: boolean;
  deliveryData: RequestData | null;
  paymentData: PaymentData | null;
}

export interface RequestData {
  receiver: string;
  address: {
    description: string; // Altere 'address' para 'description'
    city: string;
    zipCode: string; // Altere 'cep' para 'zipCode'
    number: number; // Altere 'number' para 'number: number'
    complement?: string;
  };
}

export interface PaymentData {
  name: string;
  numberCard: string;
  cvv: string;
  month: string;
  year: string;
}

const initialState: CartState = {
  dishes: [],
  isCartOpen: false,
  isCheckoutOpen: false,
  isPaymentOpen: false,
  isConfirmMessageOpen: false,
  deliveryData: null,
  paymentData: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addDishe: (state, action: PayloadAction<IDishe>) => {
      state.dishes = [...state.dishes, action.payload];
    },
    removeDishe: (state, action: PayloadAction<number>) => {
      state.dishes = state.dishes.filter((dish) => dish.id !== action.payload);
    },
    setDeliveryData(state, action: PayloadAction<CartState['deliveryData']>) {
      state.deliveryData = action.payload;
    },
    setPaymentData(state, action: PayloadAction<CartState['paymentData']>) {
      state.paymentData = action.payload;
    },
    openCart: (state) => {
      state.isCartOpen = true;
      state.isCheckoutOpen = false; // Ao abrir o carrinho, o checkout é fechado
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    openCheckout: (state) => {
      state.isCheckoutOpen = true;
    },
    closeCheckout: (state) => {
      state.isCheckoutOpen = false;
    },
    openPayment: (state) => {
      state.isPaymentOpen = true;
    },
    closePayment: (state) => {
      state.isPaymentOpen = false;
    },
    openConfirmMessage: (state) => {
      state.isConfirmMessageOpen = true;
    },
    closeConfirmMessage: (state) => {
      state.isConfirmMessageOpen = false;
    },
  },
});

export const {
  addDishe,
  removeDishe,
  openCart,
  closeCart,
  openCheckout,
  closeCheckout,
  openPayment,
  closePayment,
  openConfirmMessage,
  closeConfirmMessage,
  setDeliveryData,
  setPaymentData,
} = cartSlice.actions;
export default cartSlice.reducer;
