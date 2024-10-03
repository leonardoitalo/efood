import styled from 'styled-components';
import { colors } from './variablesCss';
import ReactModal from 'react-modal';
import { ICustomModalProps } from 'interfaces/ICustomModalProps';

const rootElement =
  document.getElementById('root') || document.createElement('div');

export const ButtonBeige = styled.button`
  width: 100%;
  background-color: ${colors.beigeDark};
  color: ${colors.pink};
  border: 0;
  font-weight: 700;
  font-size: 14px;
  padding: 4px 6px;
`;

export const ModalFormContainer = styled.div`
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
  width: 100%;

  h4 {
    margin-bottom: 16px;
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
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  gap: 8px;
  justify-content: flex-start;
  margin-bottom: 24px;
`;

export const FormInputLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormInput = styled.input`
  width: 100%;
`;

export const FormButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CustomModal: React.FC<ICustomModalProps> = ({
  isOpen,
  onClose,
  children,
  flexEnd,
}) => {
  return (
    <ReactModal
      appElement={rootElement}
      isOpen={isOpen ?? false}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: 'transparent',
        },
        content: {
          position: 'static',
          border: 'none',
          background: 'none',
          overflow: 'auto',
          inset: 'unset',
        },
      }}
    >
      <Overlay flexEnd={flexEnd}>{children}</Overlay>
    </ReactModal>
  );
};

export const Overlay = styled.div.attrs<ICustomModalProps>(({ flexEnd }) => ({
  style: {
    justifyContent: flexEnd ? 'flex-end' : 'center',
  },
}))`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  z-index: 1;
`;
