import { createSelector } from "@reduxjs/toolkit"

export const isLoginnedSelector = (state) => { return state.isLoginned }
export const getAllFilms = (state) => { return state.films }