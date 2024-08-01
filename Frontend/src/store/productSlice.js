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

export const deleteProducts = createAsyncThunk('deleteProducts', async (targetProducts) => {
  // Simulate an asynchronous operation, such as an API call
  await new Promise((resolve) => setTimeout(resolve, 100)); // Simulate network delay
  return targetProducts; 
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
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {    
        const removedProducts = action.payload    
        removedProducts.forEach(prod => {          
          state.data = state.data.filter( p => p.sku !== prod.sku ); 
        });
      });;
  },
});

export default productsSlice.reducer;
export const selectData = (state) => state.products.data; 