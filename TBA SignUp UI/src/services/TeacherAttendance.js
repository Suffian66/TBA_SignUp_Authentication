import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teacherAttendanceApi = createApi({
    reducerPath: 'teacherAttendanceApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7176/api/TeacherAttendance/' }),
    endpoints: (builder) => ({
        getTeacherAttendance: builder.query({
            query: ({ attendanceDate }) => {
                return {
                    url: `GetAllAttendances?attendanceDate=${attendanceDate}`,
                    method: "GET"
                };
            }
        }),
     
    }),
});

export const { useGetTeacherAttendanceQuery  } = teacherAttendanceApi;
export default teacherAttendanceApi;
