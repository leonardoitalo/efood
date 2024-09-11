import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
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
  }),
});

export const { useGetRestaurantQuery, useGetDishesQuery } = api;
export default api;
