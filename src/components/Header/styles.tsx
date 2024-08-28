import { colors } from 'global/variablesCss';
import { IContainerImgProps } from 'interfaces/IContainerImgProps';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 180px;
  background-image: url('imgs/Vector.png');
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HeroRestaurantContainer = styled.div<IContainerImgProps>`
  position: relative;
  background-image: url(${(props) => props.$bgImg});
  background-size: cover;
  background-position: center;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 25px 0 32px 172px;
  color: ${colors.white};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  h5,
  h6 {
    z-index: 2;
    font-size: 2rem;
  }

  h5 {
    font-weight: 100;
  }

  h6 {
    font-weight: 900;
  }
`;

export const HeaderTitle = styled.h5`
  font-size: 1.13rem;
  font-weight: 900;
  line-height: 1.2rem;
  text-align: center;
  color: ${colors.pink};
`;

export const Cart = styled.span`
  font-size: 1.13rem;
  font-weight: 900;
  line-height: 1.2rem;
  text-align: right;
  color: ${colors.pink};
`;
