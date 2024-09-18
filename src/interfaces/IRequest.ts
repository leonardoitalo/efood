import { IDishe } from './IDishe';

export interface IRequest {
  products: IDishe[];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement?: string | undefined;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
}
