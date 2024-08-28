import Product from 'components/Product';
import { ProductListContainer } from './styles';

const ProductsList = () => {
  return (
    <ProductListContainer>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </ProductListContainer>
  );
};

export default ProductsList;
