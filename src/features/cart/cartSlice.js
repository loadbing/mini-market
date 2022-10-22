import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: ['12', '33', '4', '43'],
    reducers: {
    }
});

export default cartSlice.reducer