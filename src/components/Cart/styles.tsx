import { colors } from 'global/styles/variablesCss';
import styled from 'styled-components';

export const CartContainer = styled.div`
  transition: all 0.3s ease;
  width: 360px;
  position: relative;
`;

export const CartDisheContainer = styled.div`
  width: 344px;
  height: 100px;
  background-color: ${colors.pink};

  img {
    cursor: pointer;
  }
`;
