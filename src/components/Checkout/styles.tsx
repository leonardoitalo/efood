import { colors } from 'global/styles/variablesCss';
import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  transition: all 0.3s ease;
  width: 360px;
  height: 100%;
  position: relative;
  background-color: ${colors.pink};
  padding: 32px 8px 0 8px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 40px;
`;

export const Form = styled.form`
  color: ${colors.beigeDark};

  h4 {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 700;
  }

  input {
    background-color: ${colors.beigeDark};
    border: none;
    height: 32px;
    width: 100%;
    padding: 8px;
  }

  label {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  div {
    width: 100%;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
`;

export const FormInputLabel = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 8px; */
  height: 80px;
`;

export const FormButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormInputContainerMid = styled.div`
  width: 155px;
  height: 56px;
  display: flex;
  gap: 42px;

  input {
    width: 150px;
  }
`;

export const FormInput = styled.input`
  width: 100%;
`;
