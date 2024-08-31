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
import { cartAdd } from 'store/Cart/action';

const DisheModal = ({
  isOpen,
  onClose,
  foto,
  nome,
  descricao,
  porcao,
  preco,
}: IDishe) => {
  const dispatch = useDispatch();

  const dishe: IDishe = { foto, nome, descricao, porcao, preco };

  const handleAddToCart = () => {
    dispatch(cartAdd(dishe));
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
          <ButtonBeige onClick={handleAddToCart}>
            Adicionar ao carrinho - {formatPrice(preco ?? 0)}
          </ButtonBeige>
        </ModalInfo>
      </ModalContainer>
    </CustomModal>
  );
};

export default DisheModal;
