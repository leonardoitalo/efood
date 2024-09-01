import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDishe } from 'interfaces/IDishe';

interface CartState {
  dishes: IDishe[];
}

const initialState: CartState = {
  dishes: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addDishe: (state, action: PayloadAction<IDishe>) => {
      state.dishes = [...state.dishes, action.payload];
    },
    removeDishe: (state, action: PayloadAction<number>) => {
      state.dishes = [
        ...state.dishes.filter((dish) => dish.id !== action.payload),
      ];
    },
  },
});

export const { addDishe, removeDishe } = cartSlice.actions;
export default cartSlice.reducer;
