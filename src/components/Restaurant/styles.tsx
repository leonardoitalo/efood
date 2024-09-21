import { colors } from 'global/styles/variablesCss';
import { IContainerImgProps } from 'interfaces/IContainerImgProps';
import styled from 'styled-components';

export const RestaurantContainer = styled.div`
  width: 488px;
  height: auto;
  padding: 8px;
  color: ${colors.pink};
`;

export const ImgContainer = styled.div<IContainerImgProps>`
  background-image: url(${(props) => props.$bgImg});
  background-size: cover;
  background-position: center;
  height: 217px;
  padding: 16px;
  display: flex;
  flex-direction: row-reverse;
  gap: 8px;
`;

export const InfoContainer = styled.div`
  height: 212px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1.5px solid ${colors.pink};
  padding: 8px;
  gap: 16px;
`;

export const InfoHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  span {
    color: ${colors.pink};
    margin-right: 8px;
    font-size: 18px;
    font-weight: 700;
    line-height: 21.09px;
    text-align: center;
  }
`;

export const Type = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 14.06px;
  text-align: center;
  color: ${colors.beigeDark};
  background-color: ${colors.pink};
  padding: 6px 4px;
  height: fit-content;
`;

export const Highlighted = styled(Type)``;

export const InfoTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
`;

export const InfoText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  height: 8em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
`;
export const InfoButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  background-color: ${colors.pink};
  color: ${colors.beigeDark};
  padding: 4px 6px;
  border: 0;
`;
