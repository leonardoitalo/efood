import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDishe } from 'interfaces/IDishe';

interface CartState {
  dishes: IDishe[];
  isCartOpen: boolean;
  isCheckoutOpen: boolean;
}

const initialState: CartState = {
  dishes: [],
  isCartOpen: false,
  isCheckoutOpen: false,
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
  },
});

export const {
  addDishe,
  removeDishe,
  closeCart,
  closeCheckout,
  openCart,
  openCheckout,
} = cartSlice.actions;
export default cartSlice.reducer;
