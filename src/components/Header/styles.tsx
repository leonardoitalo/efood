import { colors } from 'global/styles/variablesCss';
import { IContainerImgProps } from 'interfaces/IContainerImgProps';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 180px;
  background-image: url('/imgs/Vector.png');
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12.5vw 0 12.5vw;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: space-around;
  }
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
  padding: 25px 0 32px 12.5vw;
  color: ${colors.white};
  z-index: 0;

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

  h1,
  h2 {
    z-index: 2;
    font-size: 2rem;
  }

  h1 {
    font-weight: 100;
  }

  h2 {
    font-weight: 900;
  }
`;

export const HeaderTitle = styled(Link)`
  font-size: 1.13rem;
  font-weight: 900;
  line-height: 1.2rem;
  text-align: center;
  color: ${colors.pink};
  cursor: pointer;
`;

export const HeaderCartLength = styled.span`
  font-size: 1.13rem;
  font-weight: 900;
  line-height: 1.2rem;
  text-align: right;
  color: ${colors.pink};
  cursor: pointer;
`;
