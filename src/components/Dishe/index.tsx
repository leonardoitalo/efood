import { IDishe } from 'interfaces/IDishe';
import {
  DisheText,
  DisheContainer,
  DisheInfo,
  DisheTitle,
  DisheImg,
} from './styles';

import { ButtonBeige } from 'global/styles/GlobalStyledComponents';

const Dishe = ({ nome, descricao, foto, alt, openModal }: IDishe) => {
  return (
    <>
      <DisheContainer>
        <DisheImg>
          <img src={foto} alt={alt} />
        </DisheImg>
        <DisheInfo>
          <DisheTitle>{nome}</DisheTitle>
          <DisheText>{descricao}</DisheText>
          <ButtonBeige onClick={openModal}>Adicionar ao carrinho</ButtonBeige>
        </DisheInfo>
      </DisheContainer>
    </>
  );
};

export default Dishe;
