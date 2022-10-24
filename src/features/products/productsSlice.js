import { createSlice } from '@reduxjs/toolkit'
import items from './products.json'

export const productsSlice = createSlice({
    name: 'products',
    initialState: { items, selected: {} },
    reducers: {
        selectProduct: (state, action) => {
            return { ...state, selected: action.payload }
        }
    }
});

export const { selectProduct } = productsSlice.actions
export default productsSlice.reducer
