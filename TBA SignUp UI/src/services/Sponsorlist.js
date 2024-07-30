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
        }),
        updateSponsor: builder.mutation({
          query: ({ sponsorId, ...updateDto }) => ({
              url: `UpdateSponsor?sponsorId=${sponsorId}`,
              method: 'PUT',
              body: updateDto,
          }),
      }),
    })
});

export const { useGetAllSponsorsQuery, useGetSponsorByIdQuery, useUpdateSponsorMutation } = SponsorlistApi;

export default SponsorlistApi;
