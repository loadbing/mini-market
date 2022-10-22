import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
    name: 'products',
    initialState: [1,2,4,5],
    reducers: {
    }
});

export default productsSlice.reducer
