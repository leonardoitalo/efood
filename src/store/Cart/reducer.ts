import CartActionTypes from './types.actions';
import { IDishe } from 'interfaces/IDishe';

const initalState = {
  dishes: [] as IDishe[],
};

const cartReducer = (
  state = initalState,
  action: { type: string; payload: IDishe }
) => {
  switch (action.type) {
    case CartActionTypes.ADD_DISHE:
      return { ...state, dishes: [...state.dishes, action.payload] };

    default:
      return state;
  }
};

export default cartReducer;
