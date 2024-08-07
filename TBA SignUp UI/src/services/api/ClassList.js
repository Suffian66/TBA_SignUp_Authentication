import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const classListApi = createApi({
    reducerPath: 'classListApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://localhost:7176/api/'}),
    endpoints: (builder) => ({
        getClassList: builder.query({
            query: () => "ClassList",
        }),
        getStudentsByClassName: builder.query({
            query: (className) => `ClassList/GetStudentsByClassName?className=${className}`, 
        }),
    }),
    
})


export const { useGetClassListQuery, useGetStudentsByClassNameQuery } = classListApi;

export default classListApi;