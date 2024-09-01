import { MouseEventHandler } from 'react';

export interface ICustomModalProps {
  isOpen?: boolean;
  onClose?: MouseEventHandler<HTMLImageElement>;
  flexEnd?: boolean;
  children: React.ReactNode;
}
