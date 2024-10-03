import { RootState } from 'store/store';

export const selectDishesCount = (rootReducer: RootState) => {
  return rootReducer.cart.dishes.reduce(
    (acc, curr) => acc + (curr.preco ?? 0),
    0
  );
};
