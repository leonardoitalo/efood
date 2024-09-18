import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRequest } from 'interfaces/IRequest';
import { IRestaurant } from 'interfaces/IRestaurant';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<IRestaurant[], void>({
      query: () => 'restaurantes',
    }),
    getDishes: builder.query<IRestaurant, string>({
      query: (id) => `restaurantes/${id}`,
    }),
    // Adicionando o mutation para fazer um POST
    submitOrder: builder.mutation<IRequest, Partial<IRequest>>({
      query: (newRequest) => ({
        url: 'checkout',
        method: 'POST',
        body: newRequest,
      }),
    }),
  }),
});

export const {
  useGetRestaurantQuery,
  useGetDishesQuery,
  useSubmitOrderMutation,
} = api;
export default api;
