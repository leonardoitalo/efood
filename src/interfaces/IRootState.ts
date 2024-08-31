import cartReducer from 'store/Cart/reducer';

export interface IRootState {
  cartReducer: ReturnType<typeof cartReducer>;
}
