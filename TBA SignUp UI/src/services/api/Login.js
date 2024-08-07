import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Login = createApi({
    reducerPath: 'sponsorApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:7176/api/Authentication/'}),
    endpoints: (builder) => ({
     login: builder.query({
            query: () => "login",
            Method: 'POST'
        }),
      userlogin: builder.mutation({
        query: (data) => ({
            url: 'login',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data,
        }),
      }),
      })
    })


export const {useLoginQuery, useUserloginMutation} = Login;

export default Login;