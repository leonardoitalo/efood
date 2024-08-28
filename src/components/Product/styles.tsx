import { colors, sizes } from 'global/variablesCss';
import styled from 'styled-components';

export const ProductContainer = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${colors.pink};
  padding: 8px;
  color: ${colors.beigeDark};

  img {
    width: 100%;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: 900;
  line-height: ${sizes.lineHeight};
`;

export const PoductText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
`;

export const ProductButton = styled.button`
  background-color: ${colors.beigeDark};
  color: ${colors.pink};
  border: 0;
  font-weight: 700;
  font-size: 14px;
  padding: 4px 0;
`;
