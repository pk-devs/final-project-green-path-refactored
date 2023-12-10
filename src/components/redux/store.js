import { combineReducers, configureStore } from "@reduxjs/toolkit"
import pathsReducer from "./reducers/pathSlice"
import apiReducer from "./reducers/apiSlice"

const reducer = combineReducers({
    paths: pathsReducer,
    api: apiReducer
  })
  
export const store = configureStore({ reducer: reducer })