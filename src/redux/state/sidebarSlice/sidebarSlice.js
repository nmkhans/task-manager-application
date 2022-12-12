import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: true,
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