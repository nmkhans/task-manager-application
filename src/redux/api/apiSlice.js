import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import mode from "../../project.config";

const authorization = `Bearer ${JSON.parse(localStorage.getItem("accessToken"))}`;

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `${mode.production ? process.env.REACT_APP_PRODUCTION_API : process.env.REACT_APP_DEVELOPMENT_API}`
    }),
    tagTypes: ["user", "task"],
    endpoints: (builder) => ({
        uploadImage: builder.mutation({
            query: (data) => ({
                url: "/image-upload",
                method: "POST",
                body: data
            })
        }),
        registerUser: builder.mutation({
            query: (data) => ({
                url: "/register-user",
                method: "POST",
                body: data
            })
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: "/login-user",
                method: "POST",
                body: data
            })
        }),
        getAllTasks: builder.query({
            query: () => ({
                headers: {
                    authorization: authorization
                },
                url: "/get-tasks"
            }),
            providesTags: ["task"]
        }),
        getTaskStats: builder.query({
            query: (email) => ({
                headers: {
                    authorization: authorization
                },
                url: `/count-task?email=${email}`
            }),
            providesTags: ["task"]
        }),
        createTask: builder.mutation({
            query: (data) => ({
                headers: {
                    authorization: authorization
                },
                url: `/create-task?email=${data.email}`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["task"]
        })
    })
});

export const {
    useUploadImageMutation,
    useRegisterUserMutation,
    useLoginUserMutation,
    useGetAllTasksQuery,
    useGetTaskStatsQuery,
    useCreateTaskMutation,
} = api;