import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
import cookies from "js-cookie";
import mode from "../../project.config";

const authorization = `Bearer ${cookies.get("accessToken")}`;

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
        }),
        getTasks: builder.query({
            query: ({ email, status }) => ({
                headers: {
                    authorization: authorization
                },
                url: `/filter-task?status=${status}&email=${email}`
            }),
            providesTags: ["task"]
        }),
        updateTask: builder.mutation({
            query: ({ id, status }) => ({
                headers: {
                    authorization: authorization
                },
                url: `/update-task/${id}`,
                method: "PUT",
                body: status
            }),
            invalidatesTags: ["task"]
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                headers: {
                    authorization: authorization
                },
                url: `delete-task/${id}`,
                method: "DELETE",
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
    useGetTasksQuery,
    useUpdateTaskMutation,
    useDeleteTaskMutation
} = api;