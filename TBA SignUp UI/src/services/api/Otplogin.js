import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const login2FA = createApi({
    reducerPath: 'login2FA',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/Authentication/' }),
    endpoints: (builder) => ({
        // login2FA: builder.query({
        //     query: () => "login-2FA",
        // }),
        userlogin2FA: builder.mutation({
            query: (body) => {
              const { email, code } = body;
              return {
                url: `login-2FA?email=${email}&code=${code}`,
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
                credentials: 'include',
              };
            },
          }),
    }),
});

export const { useLogin2FAQuery, useUserlogin2FAMutation } = login2FA;

export default login2FA;
