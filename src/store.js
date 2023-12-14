import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

import pathsReducer from "./reducers/pathSlice"
import apiReducer from "./reducers/apiSlice"

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    paths: pathsReducer,
    api: apiReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)