import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from "./state/sidebarSlice/sidebarSlice";
import { api } from "./api/apiSlice";
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducerPath,
        sidebar: sidebarReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)