import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Studentlist = createApi({
  reducerPath: 'Studentlist',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/Student/' }),
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: () => 'GetAllStudents',
    }),
    getStudentById: builder.query({
      query: (studentId) => `GetStudentById?studentId=${studentId}`
    }),
    createStudent: builder.mutation({
      query: (body) => ({
        url: 'CreateStudent',
        method: 'POST',
        body: body,
      }),
    }),
    updateStudent: builder.mutation({
      query: ({ sponsorId, ...body }) => ({
        url: `UpdateStudent`,
        method: 'PUT',
        body: data,
      }),
    }),
  })
});

export const { useGetAllStudentsQuery, useGetStudentByIdQuery, useCreateStudentMutation, useUpdateStudentMutation, useUpdateStudentFamilyMutation } = Studentlist;

export default Studentlist;
