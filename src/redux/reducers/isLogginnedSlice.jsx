import { createSlice } from "@reduxjs/toolkit";

const isLoginnedSlice = createSlice({
    name: "isLoginned",
    initialState: localStorage.getItem("user") === null ? false : true,
    reducers: {
        login: (state) => {
            return true;
        },
        logout: (state) => {
            return false;
        }
    }
})
export const { login, logout } = isLoginnedSlice.actions;
export default isLoginnedSlice.reducer;