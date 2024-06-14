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
  }),
});

export const { useCreateTeacherMutation } = TeacherApi;
export default TeacherApi;
