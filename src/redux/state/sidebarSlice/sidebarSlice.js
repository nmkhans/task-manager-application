import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
}

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        handleSidebarState: (state) => {
            state.value = !state.value
        }
    }
})

export const { handleSidebarState } = sidebarSlice.actions;
export default sidebarSlice.reducer;