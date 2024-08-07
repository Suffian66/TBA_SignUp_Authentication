import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const TeacherApi = createApi({
  reducerPath: "TeacherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7176/api/" }),
  endpoints: (builder) => ({
    createTeacher: builder.mutation({
      query: (body) => ({
        url: "Teacher",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }),
    }),
    getTeacherById: builder.query({
      query: (teacherId) => `Teacher/GetTeacherById?teacherId=${teacherId}`,
    }),
    getTeacherList: builder.query({
      query: () => `Teacher/GetTeacherList`,
    }),
    updateTeacher: builder.mutation({
      query: ({ teacherId, ...body }) => ({
        url: `Teacher/UpdateTeacher?teacherId=${teacherId}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }),
    }),
  }),
});

export const {
  useCreateTeacherMutation,
  useGetTeacherByIdQuery,
  useGetTeacherListQuery,
  useUpdateTeacherMutation,
} = TeacherApi;

export default TeacherApi;
