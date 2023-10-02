import { createSlice } from "@reduxjs/toolkit";

import { fetchProducts } from '../utils/api';

const initialState = {
  data: [],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchTheProducts(state, action) {
      state.data = action.payload;
    },
    
  }
})

export const { fetchTheProducts } = productsSlice.actions;
export default productsSlice.reducer;

export function getTheProducts() {
  return async function getProductsThunk(dispatch, getState) {
    // const data = await fetch('https://fakestoreapi.com/products')
    // const result = await data.json();

    const result = await fetchProducts();

    dispatch(fetchTheProducts(result))
  }
}