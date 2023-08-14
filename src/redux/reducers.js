import { createReducer } from '@reduxjs/toolkit'
import * as actions from './actions'

const initialState = {
    favorites: [],
    shows: [],
    error: '',
}

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(actions.getFavorites.fulfilled, (state, action) => {
            state.favorites = action.payload.favorites
            state.error = ''
        })
        .addCase(actions.getShows.fulfilled, (state, action) => {
            state.shows = action.payload.shows
            state.error = ''
        })
        .addCase(actions.getShows.rejected, (state, action) => {
            state.error = action.payload
        })
})

export default reducer