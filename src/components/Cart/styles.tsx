import { colors } from 'global/styles/variablesCss';
import styled from 'styled-components';

export const CartContainer = styled.div`
  transition: all 0.3s ease;
  width: auto;
  position: relative;
`;

export const CartDisheContainer = styled.div`
  width: 344px;
  height: 1624px;
  background-color: ${colors.pink};

  img {
    cursor: pointer;
  }
`;
