import { configureStore } from '@reduxjs/toolkit';
import { api } from "./api/apiSlice";
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import sidebarReducer from "./state/sidebarSlice/sidebarSlice";
import userReducer from "./state/userSlice/userSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        sidebar: sidebarReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)