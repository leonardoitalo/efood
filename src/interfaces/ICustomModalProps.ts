import { MouseEventHandler } from 'react';

export interface ICustomModalProps {
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLImageElement>;
  children: React.ReactNode;
}
