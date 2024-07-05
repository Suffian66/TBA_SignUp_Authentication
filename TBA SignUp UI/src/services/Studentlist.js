import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Studentlist = createApi({
    reducerPath: 'Studentlist',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/Student/' }),
    endpoints: (builder) => ({
        getAllStudents: builder.query({
          query: () => 'GetAllStudents',
        }),

        getStudentById:builder.query({
          query: (studentId) => `GetStudentById?studentId=${studentId}`
        }),

        createStudent: builder.mutation({
          query: (newStudent) => ({
            url: 'CreateStudent',
            method: 'POST',
            body: newStudent,
        }),
      }),
    })
});

export const { useGetAllStudentsQuery, useGetStudentByIdQuery, useCreateStudentMutation } = Studentlist;

export default Studentlist;
