import { colors } from 'global/styles/variablesCss';
import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 138px;
  padding: 40px 0;
  background-image: url('imgs/Vector.png');
`;

export const HeroTitle = styled.p`
  color: ${colors.pink};
  font-size: 36px;
  font-weight: 900;
  text-align: center;
`;
