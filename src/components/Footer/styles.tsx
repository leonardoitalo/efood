import { colors } from 'global/variablesCss';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: auto;
  height: 298px;
  background-color: ${colors.beigeDark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  align-items: center;
`;

export const LogosContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const FooterText = styled.p`
  margin-top: 2.5rem;
  font-size: 1em;
  font-weight: 400;
  line-height: 1em;
  text-align: center;
  color: ${colors.pink};
`;
