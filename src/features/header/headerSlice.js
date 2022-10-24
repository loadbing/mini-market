import { createSlice } from '@reduxjs/toolkit'

export const headerSlice = createSlice({
    name: 'header',
    initialState: { isShowCart: false },
    reducers: {
        showCart: (state, action) => {
            return { ...state, isShowCart: action.payload ? false : !state.isShowCart }
        }
    }
});

export const { showCart } = headerSlice.actions
export default headerSlice.reducer