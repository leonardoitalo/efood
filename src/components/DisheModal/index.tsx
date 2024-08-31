import { ButtonBeige } from 'global/styles/GlobalStyledComponents';
import ReactModal from 'react-modal';
import {
  Overlay,
  ModalImage,
  ModalInfo,
  ModalTitle,
  ModalText,
  ModalContainer,
  CloseButton,
} from './stylesModal';
import formatPrice from 'global/utils/formatPrice';
import { IDishe } from 'interfaces/IDishe';

const rootElement =
  document.getElementById('root') || document.createElement('div');

const DisheModal = ({
  isOpen,
  onClose,
  foto,
  nome,
  descricao,
  porcao,
  preco,
}: IDishe) => {
  return (
    <ReactModal
      appElement={rootElement}
      isOpen={isOpen ?? false}
      style={{
        overlay: {
          backgroundColor: 'transparent',
        },
        content: {
          position: 'static',
          border: 'none',
          background: 'none',
          overflow: 'auto',
          inset: 'unset',
        },
      }}
    >
      <Overlay>
        <ModalContainer>
          <CloseButton onClick={onClose} src="/imgs/closeIcon.png" />
          <ModalImage>
            <img src={foto} alt="" />
          </ModalImage>
          <ModalInfo>
            <ModalTitle>{nome}</ModalTitle>
            <ModalText>{descricao}</ModalText>
            <span>Serve: de {porcao}</span>
            <ButtonBeige>
              Adicionar ao carrinho - {formatPrice(preco ?? 0)}
            </ButtonBeige>
          </ModalInfo>
        </ModalContainer>
      </Overlay>
    </ReactModal>
  );
};

export default DisheModal;
