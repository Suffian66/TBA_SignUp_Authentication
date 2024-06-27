import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const MapSponsorStudentApi = createApi({
    reducerPath: 'MapSponsorStudentApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/MapSponsorStudent/' }),
    endpoints: (builder) => ({
        getAllMapSponsorStudents: builder.query({
          query: () => 'GetAllMapSponsorStudents',
        }),

        // getSponsorById:builder.query({
        //   query: (sponsorId) => `GetSponsorById?sponsorId=${sponsorId}`
        // })
      }),


});

export const { useGetAllMapSponsorStudentsQuery } = MapSponsorStudentApi;

export default MapSponsorStudentApi;
