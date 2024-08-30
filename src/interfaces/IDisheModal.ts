import { MouseEventHandler } from 'react';

export interface IDisheModal {
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLImageElement>;
  img: string;
  title: string;
  text: string;
  portion: string;
  price: number;
}
