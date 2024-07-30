import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        { type: "shoes" }
    ]
};

export const todoSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const newProduct = {
                type: action.payload.type // Consistent with initial state structure
            };
            state.products.push(newProduct);
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(
                (product) => product.type !== action.payload.type
            );
        },
    }
});

export const { addProduct, removeProduct } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
