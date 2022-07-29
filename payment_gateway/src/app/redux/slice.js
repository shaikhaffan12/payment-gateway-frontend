import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state';
import { getProduct } from './action';

export const products = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        // reducer for increaing amount of product
        incrementCount: (state) => {
            state.price += 299
        },
        decrementCount : (state) => {
            state.price -= 299
        }
    },
    // extra reducer for storing fetch data to initial state
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled, (state,payload) => {
            state.products_data = payload.payload
            state.productFetch = true
        })
        builder.addCase(getProduct.rejected, (state) => {
            state.error = true
        })
        
    }
})

export default products.reducer
