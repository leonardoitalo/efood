import styled from 'styled-components';
import { colors } from './variablesCss';
import ReactModal from 'react-modal';
import { ICustomModalProps } from 'interfaces/ICustomModalProps';

const rootElement =
  document.getElementById('root') || document.createElement('div');

export const ButtonBeige = styled.button`
  background-color: ${colors.beigeDark};
  color: ${colors.pink};
  border: 0;
  font-weight: 700;
  font-size: 14px;
  padding: 4px 6px;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const CustomModal: React.FC<ICustomModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <ReactModal
      appElement={rootElement}
      isOpen={isOpen}
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
      <Overlay>{children}</Overlay>
    </ReactModal>
  );
};
