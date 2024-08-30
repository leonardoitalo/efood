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
import { IDisheModal } from 'interfaces/IDisheModal';

const rootElement =
  document.getElementById('root') || document.createElement('div');

const DisheModal = ({
  isOpen,
  onClose,
  img,
  title,
  text,
  portion,
  price,
}: IDisheModal) => {
  return (
    <ReactModal
      appElement={rootElement}
      isOpen={isOpen}
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
          <CloseButton onClick={onClose} src="imgs/closeIcon.png" />
          <ModalImage>
            <img src={img} alt="" />
          </ModalImage>
          <ModalInfo>
            <ModalTitle>{title}</ModalTitle>
            <ModalText>{text}</ModalText>
            <span>Serve: de {portion}</span>
            <ButtonBeige>
              Adicionar ao carrinho - {formatPrice(price)}
            </ButtonBeige>
          </ModalInfo>
        </ModalContainer>
      </Overlay>
    </ReactModal>
  );
};

export default DisheModal;
