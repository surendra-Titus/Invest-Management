import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const investmentApi = createApi({
  reducerPath: 'investmentApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getInvestments: builder.query({
      query: () => 'data/investments.json',
    }),
    createInvestments: builder.mutation({
      query: (newInvestment) => ({  
        url: 'data/investments.json',
        method: 'POST',
        body: newInvestment,
      }),
    }),
    updateInvestments: builder.mutation({
      query: (updatedInvestment) => ({  
        url: `data/investments/${updatedInvestment.id}.json`,
        method: 'PUT',
        body: updatedInvestment,
      }),
    }),
    deleteInvestments: builder.mutation({
      query: (id) => ({  
        url: `data/investments/${id}.json`,
        method: 'DELETE',
      }),
    }),
    getInvestmentById: builder.query({
      query: (id) => `data/investments/${id}.json`,
    }),
  }),
});

export const { useGetInvestmentsQuery, useCreateInvestmentsMutation, useUpdateInvestmentsMutation, useDeleteInvestmentsMutation, useGetInvestmentByIdQuery } = investmentApi;
