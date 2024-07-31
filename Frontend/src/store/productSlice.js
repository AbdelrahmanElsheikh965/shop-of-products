import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { listProducts } from '../APIs/Endpoints';

export const getAllProducts = createAsyncThunk('getAllProducts', async () => {
    const products = await listProducts();
    return products;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.data;
        console.log("action.payload", action.payload);
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
export const selectData = (state) => state.products.data; 