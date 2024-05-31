import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const forgotPasswordApi = createApi({
  reducerPath: 'forgotPasswordApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/Authentication/' }),
  endpoints: (builder) => ({
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: `forgot-password?email=${data.email}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        
      })
    })
  })
});

export const { useForgotPasswordMutation } = forgotPasswordApi;

export default forgotPasswordApi;
