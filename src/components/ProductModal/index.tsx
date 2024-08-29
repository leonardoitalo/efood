import { ButtonBeige } from 'global/GlobalStyledComponents';
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
import formatPrice from 'utils/formatPrice';
import { IProductModal } from 'interfaces/IProductModal';

const rootElement =
  document.getElementById('root') || document.createElement('div');

const ProductModal = ({
  isOpen,
  onClose,
  img,
  title,
  text,
  portion,
  price,
}: IProductModal) => {
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

export default ProductModal;
