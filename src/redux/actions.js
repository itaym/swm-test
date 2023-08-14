import { createAsyncThunk } from '@reduxjs/toolkit'

const ACTION_GET_FAVORITES = 'ACTION_GET_QUESTIONS'
const ACTION_GET_SHOWS = 'ACTION_GET_SHOWS'
const ACTION_SET_FAVORITES = 'ACTION_GET_QUESTIONS'

export const getFavorites = createAsyncThunk(
    ACTION_GET_FAVORITES,
    async () => {
        try {
            const favorites = localStorage.getItem('favorites')
            return { favorites: JSON.parse(favorites) }
        }
        catch { return  { favorites: [] } }
    }
)

export const getShows = createAsyncThunk(
    ACTION_GET_SHOWS,
    async (query, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
            return { shows: await response.json() }
        }
        catch ( e ) { return  rejectWithValue(e.message) }
    }
)

export const setFavorites = createAsyncThunk(
    ACTION_SET_FAVORITES,
    async (favorites, { rejectWithValue }) => {
        try {
            localStorage.setItem('favorites', JSON.stringify(favorites))
            return { favorites, error: '' }
        }
        catch ( e ) { return  rejectWithValue({ error: e.message }) }
    }
)