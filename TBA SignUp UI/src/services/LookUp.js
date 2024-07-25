import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const LookUpApi = createApi({
    reducerPath: 'LookUpApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/LookUp/' }),
    endpoints: (builder) => ({
        getCountries: builder.query({
            query: () => "countries",
            url:`countries`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            
        }),
        getCategoryDetail: builder.query({
            query: (filters) => ({
                url: `CategoryDetails`,
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: filters
            }),
        }),
    }),
});

export const { useGetCountriesQuery, useGetCategoryDetailQuery } = LookUpApi;

export default LookUpApi;
