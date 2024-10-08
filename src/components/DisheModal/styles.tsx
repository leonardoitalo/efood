import { colors } from 'global/styles/variablesCss';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: relative;
  width: auto;
  height: 344px;
  background-color: ${colors.pink};
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 24px;
  align-content: flex-start;

  @media (max-width: 700px) {
    width: min-content;
    flex-direction: row;
    height: auto;
  }
`;

export const ModalImage = styled.div`
  width: 280px;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  color: ${colors.white};

  span {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const ModalTitle = styled.h4`
  font-size: 18px;
  font-weight: 900;
  line-height: 21.09px;
  text-align: center;
`;

export const ModalText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  max-width: 656px;

  @media (max-width: 1100px) {
    max-width: 317px;
  }
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;

  @media (max-width: 700px) {
    top: 8px;
    right: 8px;
  }
`;
