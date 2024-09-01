import CartActionTypes from './types.actions';
import { IDishe } from 'interfaces/IDishe';

export const cartAdd = (dishe: IDishe) => ({
  type: CartActionTypes.ADD_DISHE,
  payload: dishe,
});

export const cartCalcTotalPrice = (dishe: IDishe) => ({
  type: CartActionTypes.CALC_TOTAL_PRICE,
  payload: dishe,
});
