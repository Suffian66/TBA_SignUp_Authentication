import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const SponsorlistApi = createApi({
    reducerPath: 'SponsorlistApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/Sponsor/' }),
    endpoints: (builder) => ({
        getAllSponsors: builder.query({
          query: () => 'GetAllSponsors',
        }),

        getSponsorById:builder.query({
          query: (sponsorId) => `GetSponsorById?sponsorId=${sponsorId}`
        })
      }),


});

export const { useGetAllSponsorsQuery, useGetSponsorByIdQuery } = SponsorlistApi;

export default SponsorlistApi;
