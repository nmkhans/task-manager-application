import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from "./state/sidebarSlice/sidebarSlice";

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer
    }
})