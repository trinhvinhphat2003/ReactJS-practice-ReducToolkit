import { createSlice } from "@reduxjs/toolkit";

const FilmSlice = createSlice({
    name: "films",
    initialState: [],
    reducers: {
        addFilms: (state, action) => {
            state.push(action.payload);
            return state;
        },
        editFilm: (state, action) => {
            return state.map((film) => {
                if (film.id === action.payload.id) {
                    return { ...action.payload }
                }
                return film;
            });
        },
        deleteFilm: (state, action) => {
            return state.filter((film) => film.id !== action.payload);
        },
        setFIlms: (state, action) => {
            return action.payload;
        }
    }
})
export const { addFilms, editFilm, deleteFilm, setFIlms } = FilmSlice.actions;
export default FilmSlice.reducer;