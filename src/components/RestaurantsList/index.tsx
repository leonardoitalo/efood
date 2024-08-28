import Restaurant from 'components/Restaurant';
import { RestaurantsListContainer } from './styles';

const RestaurantsList = () => {
  return (
    <RestaurantsListContainer>
      <Restaurant
        title={'Hioki Sushi'}
        rating={4.9}
        tags={['Destaque da semana', 'Japonesa']}
        text={
          'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
        }
      />
      <Restaurant
        title={'Hioki Sushi'}
        rating={4.9}
        tags={['Destaque da semana', 'Japonesa']}
        text={
          'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
        }
      />
      <Restaurant
        title={'Hioki Sushi'}
        rating={4.9}
        tags={['Destaque da semana', 'Japonesa']}
        text={
          'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
        }
      />
      <Restaurant
        title={'Hioki Sushi'}
        rating={4.9}
        tags={['Destaque da semana', 'Japonesa']}
        text={
          'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
        }
      />
    </RestaurantsListContainer>
  );
};

export default RestaurantsList;
