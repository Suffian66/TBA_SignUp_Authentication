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
      query: ({ studentId, ...body }) => ({
        url: `UpdateStudent?studentId=${studentId}`,
        method: 'PUT',
        body,
      }),
    }),
  })
});

export const { useGetAllStudentsQuery, useGetStudentByIdQuery, useCreateStudentMutation, useUpdateStudentMutation, useUpdateStudentFamilyMutation } = Studentlist;

export default Studentlist;
