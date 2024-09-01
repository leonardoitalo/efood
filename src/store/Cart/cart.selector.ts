import { IRootState } from 'interfaces/IRootState';

export const selectDishesCount = (rootReducer: IRootState) => {
  return rootReducer.cartReducer.dishes.reduce(
    (acc, curr) => acc + (curr.preco ?? 0),
    0
  );
};
