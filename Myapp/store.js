import { configureStore } from '@reduxjs/toolkit'
import { productDetailsReducer } from './reducers/ProductReducer'
import { combineReducers } from 'redux'



export const store = configureStore({
    reducer: {
        productDetails : productDetailsReducer,
    }
})