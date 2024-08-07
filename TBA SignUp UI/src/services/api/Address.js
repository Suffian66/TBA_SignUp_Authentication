import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AddressApi = createApi({
    reducerPath: 'AddressApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/Address/' }),
    endpoints: (builder) => ({
        addAddress: builder.mutation({
            query: (body) => ({
                url: 'CreateAddress',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body,
            }),
        }),
        addStudentAddress: builder.mutation({
            query: (body) => ({
                url: 'CreateStudentAddress',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body,
            }),
        }),
        getAddressById: builder.query({
            query: (id) => `GetAddressById?id=${id}`,
        }),
        }),
})

export const { useAddAddressMutation, useGetAddressByIdQuery, useAddStudentAddressMutation } = AddressApi;

export default AddressApi;
