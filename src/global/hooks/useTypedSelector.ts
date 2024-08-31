import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { IRootState } from 'interfaces/IRootState';

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
