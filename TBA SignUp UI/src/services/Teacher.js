import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const TeacherApi = createApi({
  reducerPath: 'TeacherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/Teacher/' }),
  endpoints: (builder) => ({
    createTeacher: builder.mutation({
      query: (data) => ({
        url: 'Teacher', 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      }),
    }),
    getTeacherById:builder.query({
      query: (teacherId) => `GetTeacherById?teacherId=${teacherId}`
    }),
    getTeacherList:builder.query({
      query: () => `GetTeacherList`
    })
  }),
});

export const { useCreateTeacherMutation, useGetTeacherByIdQuery, useGetTeacherListQuery } = TeacherApi;
export default TeacherApi;
