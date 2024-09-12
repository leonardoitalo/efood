import { colors } from 'global/styles/variablesCss';
import styled from 'styled-components';

export const RestaurantsListContainer = styled.main`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr); // 2 colunas com tamanho igual
  row-gap: 4vw; // Espaço entre os itens (pode ajustar o valor como preferir)
  width: 100vw;
  padding: 120px 12.5vw;
  background-color: ${colors.beige};

  @media (max-width: 768px) {
    // Ajuste para telas menores
    grid-template-columns: 1fr; // Exibe 1 item por linha em telas menores
  }
`;
