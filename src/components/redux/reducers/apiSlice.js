import { createSlice } from "@reduxjs/toolkit"

export const apiSlice = createSlice({
    name: "api",
    initialState: {
        articles: [],
        isLoading: false,
        apiError: null
    },
    reducers: {
        isLoading: (state, action) => {
            state.isLoading = action.payload
        },
        fetchedArticles: (state, action) => {
            state.isLoading = false
            state.articles = action.payload
            state.apiError = null
        },
        apiError: (state, action) => {
            state.isLoading = false
            state.articles = []
            state.apiError = action.payload
        }
    }
})

export const { isLoading, fetchedArticles, apiError } = apiSlice.actions
export default apiSlice.reducer
