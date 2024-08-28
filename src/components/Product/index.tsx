import {
  PoductText,
  ProductButton,
  ProductContainer,
  ProductInfo,
  ProductTitle,
} from './styles';

const Product = () => {
  return (
    <ProductContainer>
      <div>
        <img src="imgs/image3.png" alt="" />
      </div>
      <ProductInfo>
        <ProductTitle>Pizza Marguerita</ProductTitle>
        <PoductText>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </PoductText>
        <ProductButton>Adicionar ao carrinho</ProductButton>
      </ProductInfo>
    </ProductContainer>
  );
};

export default Product;
