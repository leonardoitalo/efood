import { IProduct } from 'interfaces/IProduct';
import {
  PoductText,
  ProductContainer,
  ProductInfo,
  ProductTitle,
} from './styles';
import { useState } from 'react';
import ReactModal from 'react-modal';
import {
  Overlay,
  Modal,
  ModalImage,
  ModalInfo,
  ModalTitle,
  ModalText,
} from 'components/Modal/stylesModal';
import { ButtonBeige } from 'global/GlobalStyledComponents';

const Product = ({ title, text, img, alt }: IProduct) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <ProductContainer>
        <div>
          <img src={img} alt={alt} />
        </div>
        <ProductInfo>
          <ProductTitle>{title}</ProductTitle>
          <PoductText>{text}</PoductText>
          <ButtonBeige onClick={openModal}>Adicionar ao carrinho</ButtonBeige>
        </ProductInfo>
      </ProductContainer>
      <ReactModal
        isOpen={modalIsOpen}
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
          <Modal>
            <ModalImage>
              <img src="imgs/image3.png" alt="" />
            </ModalImage>
            <ModalInfo>
              <ModalTitle>Pizza Marguerita</ModalTitle>
              <ModalText>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
              </ModalText>
              <span>Serve: de 2 a 3 pessoas</span>
              <ButtonBeige>Adicionar ao carrinho - R$ 60,90</ButtonBeige>
              <button onClick={() => closeModal()}>Fechar Modal</button>
            </ModalInfo>
          </Modal>
        </Overlay>
      </ReactModal>
    </>
  );
};

export default Product;
