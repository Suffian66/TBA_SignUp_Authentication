
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AddressApi = createApi({
    reducerPath: 'AddressApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/Address/' }),
    endpoints: (builder) => ({
        register: builder.query({
            query: () => "countries",
        }),
        addAddress: builder.mutation({
            query: (data) => ({
                url: 'countries',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data,
            }),
        }),
    }),
});

export const { useAddAddressMutation  } = AddressApi;

export default AddressApi;
