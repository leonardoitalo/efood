import { CustomModal, ButtonBeige } from 'global/styles/GlobalStyledComponents';
import {
  ModalImage,
  ModalInfo,
  ModalTitle,
  ModalText,
  ModalContainer,
  CloseButton,
} from './styles';
import formatPrice from 'global/utils/formatPrice';
import { IDishe } from 'interfaces/IDishe';
import { useDispatch } from 'react-redux';

import { addDishe } from 'store/Cart/slice';

const DisheModal = ({
  id,
  isOpen,
  onClose,
  foto,
  nome,
  descricao,
  porcao,
  preco,
}: IDishe) => {
  const dispatch = useDispatch();

  const dishe: IDishe = { id, foto, nome, descricao, porcao, preco };

  const handleAddToCart = () => {
    dispatch(addDishe(dishe));
    alert(`Pedido ${dishe.nome} adicionado no carrinho.`);
  };

  return (
    <CustomModal isOpen={isOpen ?? false} onClose={() => onClose}>
      <ModalContainer>
        <CloseButton onClick={onClose} src="/imgs/closeIcon.png" />
        <ModalImage>
          <img src={foto} alt="" />
        </ModalImage>
        <ModalInfo>
          <ModalTitle>{nome}</ModalTitle>
          <ModalText>{descricao}</ModalText>
          <span>Serve: de {porcao}</span>
          <div>
            <ButtonBeige onClick={handleAddToCart}>
              Adicionar ao carrinho - {formatPrice(preco ?? 0)}
            </ButtonBeige>
          </div>
        </ModalInfo>
      </ModalContainer>
    </CustomModal>
  );
};

export default DisheModal;
