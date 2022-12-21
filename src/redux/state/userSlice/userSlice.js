import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const data = action.payload.data;
            const token = action.payload.token;
            localStorage.setItem("user", JSON.stringify(data));
            localStorage.setItem("accessToken", JSON.stringify(token));
            state.user = data;
            state.token = token;
        },
        loadUser: (state) => {
            const userInfo = JSON.parse(localStorage.getItem("user"));
            state.user = userInfo;
        },
        removeUser: (state) => {
            localStorage.removeItem("user");
            localStorage.removeItem("accessToken");
            state.user = null;
            state.token = "";
        }
    }
})

export const { addUser, loadUser, removeUser } = userSlice.actions;
export default userSlice.reducer;