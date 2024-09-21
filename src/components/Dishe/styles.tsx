import { colors, sizes } from 'global/styles/variablesCss';
import styled from 'styled-components';

export const DisheContainer = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${colors.pink};
  padding: 8px;
  color: ${colors.beigeDark};

  img {
    width: 100%;
  }
`;

export const DisheInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: stretch;
  align-items: stretch;
`;

export const DisheImg = styled.div`
  img {
    max-width: 304px;
    max-height: 167px;
  }
`;

export const DisheTitle = styled.h3`
  font-size: 16px;
  font-weight: 900;
  line-height: ${sizes.lineHeight};
`;

export const DisheText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;
