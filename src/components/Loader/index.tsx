import { colors } from 'global/styles/variablesCss';
import { ClipLoader } from 'react-spinners';
import { LoaderContainer } from './styles';

const Loader = () => {
  return (
    <LoaderContainer>
      <ClipLoader color={colors.pink} />
    </LoaderContainer>
  );
};

export default Loader;
