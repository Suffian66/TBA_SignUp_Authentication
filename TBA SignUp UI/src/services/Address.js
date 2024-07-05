import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AddressApi = createApi({
    reducerPath: 'AddressApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/' }),
    endpoints: (builder) => ({
        addAddress: builder.mutation({
            query: (body) => ({
                url: 'Address',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body,
            }),
        }),
        getAddressById: builder.query({
            query: (addressId) => `address/${addressId}`,
            transformResponse: (response) => response.$values, 
        }),
        }),
})

export const { useAddAddressMutation, useGetAddressByIdQuery } = AddressApi;

export default AddressApi;
