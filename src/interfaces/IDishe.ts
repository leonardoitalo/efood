import { MouseEventHandler } from 'react';

export interface IDishe {
  id?: number;
  nome: string;
  descricao: string;
  porcao?: string;
  preco?: number;
  foto: string;
  alt: string;
  isOpen?: boolean;
  openModal?: MouseEventHandler<HTMLButtonElement>;
  onClose?: MouseEventHandler<HTMLImageElement>;
}
