import { createSlice } from '@reduxjs/toolkit'
import items from './products.json'

export const productsSlice = createSlice({
    name: 'products',
    initialState: items,
    reducers: {
    }
});

export default productsSlice.reducer
