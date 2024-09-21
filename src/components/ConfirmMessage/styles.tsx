import { colors } from 'global/styles/variablesCss';
import styled from 'styled-components';

export const ConfirmMessageContainer = styled.div`
  width: 360px;
  height: 100%;
  position: relative;
  background-color: ${colors.pink};
  padding: 32px 8px 0 8px;

  h4 {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 700;
    color: ${colors.beigeDark};
  }
`;

export const ConfirmMessageText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    color: ${colors.beigeDark};
  }
`;
