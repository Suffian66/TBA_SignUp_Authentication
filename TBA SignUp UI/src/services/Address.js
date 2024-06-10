import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AddressApi = createApi({
    reducerPath: 'AddressApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/LookUpCountry/' }),
    endpoints: (builder) => ({
        getCountries: builder.query({
            query: () => "countries",
        }),
        addAddress: builder.mutation({
            query: (body) => ({
                url: 'countries',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body,
            }),
        }),
    }),
});

export const { useGetCountriesQuery, useAddAddressMutation } = AddressApi;

export default AddressApi;
