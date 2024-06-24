import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const TeacherApi = createApi({
  reducerPath: 'TeacherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/' }),
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
    fetchTeachers: builder.query({
      query: () => 'Teacher',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      
    }),
  }),

});

export const { useCreateTeacherMutation, useFetchTeachersQuery } = TeacherApi;
export default TeacherApi;
