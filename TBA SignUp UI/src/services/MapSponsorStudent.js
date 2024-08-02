import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const MapSponsorStudentApi = createApi({
    reducerPath: 'MapSponsorStudentApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/MapSponsorStudent/' }),
    endpoints: (builder) => ({
        getAllMapSponsorStudents: builder.query({
          query: () => 'GetAllMapSponsorStudents',
        }),

        getMapSponsorStudentById:builder.query({
        query: (studentId) => `GetMapSponsorStudentById?studentId=${studentId}`
      }),

      updateMapSponsor: builder.mutation({
        query: ({ id, ...mapSponsorStd }) => ({
            url: `UpdateMapSponsorStudent?id=${id}`,
            method: 'PUT',
            body: mapSponsorStd,
        }),
    }),
    deleteMapSponsorStudent: builder.mutation({
      query: ({studentId}) => ({
        url: `DeleteMapSponsorStudent?id=${studentId}`,
        method: 'DELETE'
    }),
    })
    })

});

export const { useGetAllMapSponsorStudentsQuery, useGetMapSponsorStudentByIdQuery, useUpdateMapSponsorMutation, useDeleteMapSponsorStudentMutation } = MapSponsorStudentApi;

export default MapSponsorStudentApi;
