import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Studentlist = createApi({
    reducerPath: 'Studentlist',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/Student/' }),
    endpoints: (builder) => ({
        getAllStudents: builder.query({
          query: () => 'GetAllStudents',
        }),
      }),
});

export const { useGetAllStudentsQuery } = Studentlist;

export default Studentlist;
