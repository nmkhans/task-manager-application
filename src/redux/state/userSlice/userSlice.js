import { createSlice } from "@reduxjs/toolkit";
import cookies from "js-cookie";

const initialState = {
    user: null,
    token: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const now = new Date();
            now.setTime(now.getTime() + 1 * 3600 * 1000);
            const data = action.payload.data;
            const token = action.payload.token;
            
            localStorage.setItem("user", JSON.stringify(data));
            cookies.set("accessToken", token, {
                expires: now
            });
            state.user = data;
            state.token = token;
        },
        loadUser: (state) => {
            const userInfo = JSON.parse(localStorage.getItem("user"));
            state.user = userInfo;
        },
        removeUser: (state) => {
            localStorage.removeItem("user");
            cookies.remove("accessToken");
            state.user = null;
            state.token = "";
        }
    }
})

export const { addUser, loadUser, removeUser } = userSlice.actions;
export default userSlice.reducer;