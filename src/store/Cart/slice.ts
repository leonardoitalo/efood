import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartState } from 'interfaces/ICartState';
import { IDishe } from 'interfaces/IDishe';

const initialState: ICartState = {
  dishes: [],
  isCartOpen: false,
  isCheckoutOpen: false,
  isPaymentOpen: false,
  isConfirmMessageOpen: false,
  deliveryData: null,
  paymentData: null,
  orderId: '',
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
    setDeliveryData(state, action: PayloadAction<ICartState['deliveryData']>) {
      state.deliveryData = action.payload;
    },
    setIPaymentData(state, action: PayloadAction<ICartState['paymentData']>) {
      state.paymentData = action.payload;
    },
    setOrderId(state, action: PayloadAction<ICartState['orderId']>) {
      state.orderId = action.payload;
    },
    openCart: (state) => {
      state.isCartOpen = true;
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
  setIPaymentData,
  setOrderId,
} = cartSlice.actions;
export default cartSlice.reducer;
