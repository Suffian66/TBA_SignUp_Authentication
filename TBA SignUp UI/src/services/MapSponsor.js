import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const MapSponsorApi = createApi({
    reducerPath: 'mapSponsorApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/' }),
    endpoints: (builder) => ({
        addMapSponsorStudent: builder.mutation({
            query: (data) => ({
                url: 'mapSponsorStudent',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data,
            }),
        }),
    }),
});

export const { useAddMapSponsorStudentMutation } = MapSponsorApi;

export default MapSponsorApi;
