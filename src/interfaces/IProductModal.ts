import { MouseEventHandler } from 'react';

export interface IProductModal {
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLImageElement>;
  img: string;
  title: string;
  text: string;
  portion: string;
  price: number;
}
