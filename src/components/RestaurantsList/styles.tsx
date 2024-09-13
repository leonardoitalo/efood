import { colors } from 'global/styles/variablesCss';
import styled from 'styled-components';

export const RestaurantsListContainer = styled.main`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, minmax(500px, 0.1fr));
  row-gap: 48px; // Espaço entre os itens (pode ajustar o valor como preferir)
  column-gap: 80px;
  width: 100%;
  padding: 120px 12.5vw;
  background-color: ${colors.beige};
  justify-content: center;

  @media (max-width: 900px) {
    // Ajuste para telas menores
    grid-template-columns: 1fr; // Exibe 1 item por linha em telas menores
  }
`;
