import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AddressApi = createApi({
    reducerPath: 'AddressApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/LookUp/' }),
    endpoints: (builder) => ({
        getCountries: builder.query({
            query: () => "countries",
        }),
        getCategories: builder.query({
            query: () => "categories",
        }),
        addAddress: builder.mutation({
            query: (body) => ({
                url: 'address',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body,
            }),
        }),
    }),
});

export const { useGetCountriesQuery, useGetCategoriesQuery, useAddAddressMutation } = AddressApi;

export default AddressApi;
