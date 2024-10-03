import { colors } from 'global/styles/variablesCss';
import styled from 'styled-components';

export const RestaurantsListContainer = styled.main`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, minmax(480px, 0.1fr));
  grid-template-rows: repeat(2, minmax(440px, 0.1fr));
  row-gap: 48px;
  column-gap: 80px;
  width: 100%;
  padding: 120px 12.5vw;
  background-color: ${colors.beige};
  justify-content: center;

  @media (max-width: 1155px) {
    grid-template-columns: 1fr;
  }
`;
