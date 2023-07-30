import { configureStore } from "@reduxjs/toolkit"
import isLoginnedSlice from "../reducers/isLogginnedSlice";
import FilmSlice from "../reducers/FilmSlice";

const store = configureStore({
    reducer: {
        isLoginned: isLoginnedSlice,
        films: FilmSlice
    }
});

export default store;