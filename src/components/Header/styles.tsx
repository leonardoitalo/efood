import { colors } from 'global/styles/variablesCss';
import { IContainerImgProps } from 'interfaces/IContainerImgProps';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 180px;
  background-image: url('/imgs/Vector.png');
  display: flex;
  justify-content: center;
  gap: 290px;
  align-items: center;

  @media (max-width: 1100px) {
    gap: 120px;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: space-around;
    gap: 0;
  }
`;

export const HeaderImg = styled.div`
  min-width: 125px;
`;

export const HeroRestaurantContainer = styled.div<IContainerImgProps>`
  position: relative;
  background-image: url(${(props) => props.$bgImg});
  background-size: cover;
  background-position: center;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px 32px;
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
    text-align: flex-start;
    max-width: 1016px;
    width: 100%;

    @media (max-width: 1100px) {
      max-width: 680px;
    }
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
