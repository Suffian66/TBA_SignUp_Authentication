import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const SignUpApi = createApi({
    reducerPath: 'SignUpApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/Authentication/' }),
    endpoints: (builder) => ({
        register: builder.query({
            query: () => "register-user",
        }),
        addUser: builder.mutation({
            query: (data) => ({
                url: 'register-user',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data,
            }),
        }),
    }),
});

export const { useRegisterQuery, useAddUserMutation } = SignUpApi;

export default SignUpApi;
