import { colors } from 'global/styles/variablesCss';
import styled from 'styled-components';

export const CartContainer = styled.div`
  transition: all 0.3s ease;
  width: auto;
  height: 100%;
  position: relative;
  background-color: ${colors.pink};
  padding: 32px 8px 0 8px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 40px;
`;

export const CartFinishOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  color: ${colors.beigeDark};
`;

export const CartTotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const CartDisheContainer = styled.li`
  width: 344px;
  height: 100px;
  background-color: ${colors.beigeDark};
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 10px;
  color: ${colors.pink};
  position: relative;

  h4 {
    font-size: 18px;
    font-weight: 900;
    line-height: 22px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const CartDisheImage = styled.div`
  cursor: pointer;
  max-width: 82px;
  max-height: 82px;
`;

export const CartTrashIcon = styled.div`
  position: absolute;
  top: 76px;
  left: 322px;

  img {
    cursor: pointer;
  }
`;
