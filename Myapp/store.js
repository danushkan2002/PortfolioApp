import { configureStore } from '@reduxjs/toolkit'
import { productDetailsReducer } from './reducers/ProductReducer'


export const store = configureStore({
    reducer: {
        productDetails : productDetailsReducer,
    }
})