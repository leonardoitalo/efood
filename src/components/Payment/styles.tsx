import { FormInputLabel } from 'global/styles/GlobalStyledComponents';
import styled from 'styled-components';

export const FormInputLg = styled.div`
  width: 155px;
  display: flex;
  gap: 30px;

  ${FormInputLabel}:first-child input {
    width: 228px;
  }

  ${FormInputLabel}:not(:first-child) input {
    width: 87px;
  }
`;
