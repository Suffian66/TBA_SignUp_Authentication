import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const forgotPasswordApi = createApi({
  reducerPath: 'forgotPasswordApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/Authentication/' }),
  endpoints: (builder) => ({
    forgotPassword: builder.mutation({
      query: (body) => ({
        url: "forgot-password",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      })
    })
  })
});

export const { useForgotPasswordMutation } = forgotPasswordApi;

export default forgotPasswordApi;
