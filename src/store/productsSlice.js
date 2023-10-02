import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchProducts } from "../utils/api";

const initialState = {
  data: [],
  status: "idle",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchTheProducts(state, action) {
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTheProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getTheProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(getTheProducts.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const { fetchTheProducts } = productsSlice.actions;
export default productsSlice.reducer;

export const getTheProducts = createAsyncThunk("products/get", async () => {
  // const data = await fetch('https://fakestoreapi.com/products')
  // const result = await data.json();

  const result = await fetchProducts();

  return result;
});

// export function getTheProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     // const data = await fetch('https://fakestoreapi.com/products')
//     // const result = await data.json();

//     const result = await fetchProducts();

//     dispatch(fetchTheProducts(result))
//   }
// }
