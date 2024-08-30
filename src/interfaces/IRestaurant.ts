import { IDishe } from './IDishe';

export interface IRestaurant {
  id?: number;
  titulo: string;
  capa: string;
  descricao: string;
  tipo: string;
  destacado?: boolean;
  avaliacao: number;
  cardapio: IDishe[];
}
