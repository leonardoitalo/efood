export interface IDeliveryData {
  receiver: string;
  address: {
    description: string;
    city: string;
    zipCode: string;
    number: number;
    complement?: string;
  };
}
