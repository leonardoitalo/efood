import { IProduct } from 'interfaces/IProduct';
import {
  PoductText,
  ProductButton,
  ProductContainer,
  ProductInfo,
  ProductTitle,
} from './styles';

const Product = ({ title, text, img, alt }: IProduct) => {
  return (
    <ProductContainer>
      <div>
        <img src={img} alt={alt} />
      </div>
      <ProductInfo>
        <ProductTitle>{title}</ProductTitle>
        <PoductText>{text}</PoductText>
        <ProductButton>Adicionar ao carrinho</ProductButton>
      </ProductInfo>
    </ProductContainer>
  );
};

export default Product;
