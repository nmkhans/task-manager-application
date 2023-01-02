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
                url: `/delete-task/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["task"]
        }),
        generateOtp: builder.mutation({
            query: (email) => ({
                url: `/generate-otp?email=${email}`,
                method: "POST"
            })
        }),
        verifyOtp: builder.mutation({
            query: ({email, code}) => ({
                url: `verify-otp?email=${email}`,
                method: "POST",
                body: {code}
            })
        }),
        resetPassword: builder.mutation({
            query: ({email, password, status, otp}) => ({
                url: `/reset-password?email=${email}&status=${status}`,
                method: "PUT",
                body: {otp, password}
            })
        }),
        getUsers: builder.query({
            query: () => "/get-users",
            providesTags: ["user"]
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/delete-user/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["user"]
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
    useDeleteTaskMutation,
    useGenerateOtpMutation,
    useVerifyOtpMutation,
    useResetPasswordMutation,
    useGetUsersQuery,
    useDeleteUserMutation
} = api;