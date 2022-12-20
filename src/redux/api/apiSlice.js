import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import mode from "../../project.config";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `${mode.production ? process.env.REACT_APP_PRODUCTION_API : process.env.REACT_APP_DEVELOPMENT_API}`
    }),
    tagTypes: ["user", "task"],
    endpoints: (builder) => ({
        getAllTasks: builder.query({
            query: () => "/get-tasks",
            providesTags: ["task"]
        }),
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
        })
    })
});

export const {
    useGetAllTasksQuery,
    useUploadImageMutation,
    useRegisterUserMutation,
    useLoginUserMutation
} = api;