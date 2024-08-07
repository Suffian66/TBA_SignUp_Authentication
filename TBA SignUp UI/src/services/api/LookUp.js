import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const LookUpApi = createApi({
    reducerPath: 'LookUpApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/LookUp/' }),
    endpoints: (builder) => ({
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

export const {  useGetCategoryDetailQuery } = LookUpApi;

export default LookUpApi;
