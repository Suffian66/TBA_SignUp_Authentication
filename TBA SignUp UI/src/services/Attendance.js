import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const attendanceApi = createApi({
    reducerPath: 'attendanceApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/StudentAttendance/' }),
    endpoints: (builder) => ({
        getStudentAttendance: builder.query({
            query: ({ classId, attendanceDate }) => {
                return {
                    url: `GetAllAttendances?classId=${classId}&attendanceDate=${attendanceDate}`,
                    method: "GET"
                };
            }
        }),
        getClassList:builder.query({
            query: () => "GetAllClasses",
            method: "GET"
        }),
        addStudentAttendance:builder.mutation({
            query: (body) => ({
                url: 'AddAttendance',
                method: 'POST',
                body,
            })
        }),
        updateStudentAttendance:builder.mutation({
            query: (body) => ({
                url: 'UpdateAttendance',
                method: 'PUT',
                body,
            }),
        })
    }),
});

export const { useGetStudentAttendanceQuery, useGetClassListQuery, useAddStudentAttendanceMutation, useUpdateStudentAttendanceMutation } = attendanceApi;
export default attendanceApi;
