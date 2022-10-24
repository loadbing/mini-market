import { createSlice } from '@reduxjs/toolkit'

const getInitialState = () => {
    const localCart = localStorage.getItem('cart');
    return localCart ? JSON.parse(localCart) : { price: 0, elements: [] }
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: getInitialState(),
    reducers: {
        add: (state, action) => {
            const products = [...state.elements]
            const id = action && action.payload && action.payload.id;
            const product = products.find(product => product.id === id);
            if (product) {
                if (product.total < product.amount) {
                    state.price = state.price + product.price
                    product.total = product.total + 1;
                }
            } else {
                return {
                    ...state, price: state.price + action.payload.price,
                    elements: [...state.elements, { ...action.payload, total: 1 }]
                }
            }
        },
        remove: (state, action) => {
            const products = [...state.elements]
            const id = action && action.payload && action.payload.id;
            const product = products.find(product => product.id === id);
            if (product && product.total > 1) {
                state.price = state.price - product.price
                product.total = product.total - 1;
            } else {
                const productIndex = state.elements.findIndex(product => product.id === id);
                if (productIndex !== -1) {
                    state.price = state.price - product.price
                    state.elements.splice(productIndex, 1)
                }

            }
        },
    }
});

export const { add, remove } = cartSlice.actions
export default cartSlice.reducer