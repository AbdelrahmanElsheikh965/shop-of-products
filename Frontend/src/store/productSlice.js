import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { listProducts } from '../APIs/Endpoints';

export const getAllProducts = createAsyncThunk('getAllProducts', async () => {
    const products = await listProducts();
    return products;
  }
);

export const addProduct = createAsyncThunk('addProduct', async (newProduct) => {
  const product = await setTimeout(console.log("Simulating adding product"), 100);
  return newProduct;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.data = action.payload.data;
      })
      .addCase(addProduct.fulfilled, (state, action) => {        
        state.data.push(action.payload); 
      });
  },
});

export default productsSlice.reducer;
export const selectData = (state) => state.products.data; 