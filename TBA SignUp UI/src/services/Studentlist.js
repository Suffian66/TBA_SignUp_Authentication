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
      query: (newStudent) => ({
        url: 'CreateStudent',
        method: 'POST',
        body: newStudent,
      }),
    }),
    updateStudent: builder.mutation({
      query: (data) => ({
        url: `UpdateStudent`,
        method: 'PUT',
        params: { studentId: data.id }, // Send studentId as a query parameter
        body: data,
      }),
    }),
  })
});

export const { useGetAllStudentsQuery, useGetStudentByIdQuery, useCreateStudentMutation, useUpdateStudentMutation, useUpdateStudentFamilyMutation } = Studentlist;

export default Studentlist;
