import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const resetPasswordApi = createApi({
  reducerPath: 'resetPasswordApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:7176/api/Authentication/'
  }),
  endpoints: (builder) => ({
    resetPassword: builder.mutation({
      query: (body) => ({
        url: '/reset-password',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useResetPasswordMutation } = resetPasswordApi;
export default resetPasswordApi;