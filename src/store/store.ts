import { createStore } from 'redux';
import rootReducer from './Cart/root.reducer';

const store = createStore(rootReducer);

export default store;
