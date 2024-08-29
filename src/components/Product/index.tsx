import { IProduct } from 'interfaces/IProduct';
import {
  PoductText,
  ProductContainer,
  ProductInfo,
  ProductTitle,
} from './styles';
import { useState } from 'react';

import { ButtonBeige } from 'global/GlobalStyledComponents';
import ProductModal from 'components/ProductModal';

const Product = ({ title, text, img, alt }: IProduct) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <ProductContainer>
        <div>
          <img src={img} alt={alt} />
        </div>
        <ProductInfo>
          <ProductTitle>{title}</ProductTitle>
          <PoductText>{text}</PoductText>
          <ButtonBeige onClick={handleOpen}>Adicionar ao carrinho</ButtonBeige>
          <ProductModal
            isOpen={showModal}
            onClose={handleClose}
            img={'imgs/image4.png'}
            title={'Pizza Marguerita'}
            text={
              'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.'
            }
            portion={'2 a 3 pessoas'}
            price={69.9}
          />
        </ProductInfo>
      </ProductContainer>
    </>
  );
};

export default Product;
