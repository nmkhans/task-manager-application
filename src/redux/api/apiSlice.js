import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/v1"
    }),
    tagTypes: ["user", "task"],
    endpoints: (builder) => ({
        getAllTasks: builder.query({
            query: () => "/get-tasks",
            providesTags: ["task"]
        })
    })
});

export const {
    useGetAllTasksQuery
} = api;