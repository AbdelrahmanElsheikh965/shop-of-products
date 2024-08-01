import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { deleteProducts, listProducts } from '../APIs/Endpoints';

export const getAllProducts = createAsyncThunk('getAllProducts', async () => {
    const products = await listProducts();
    return products;
  }
);

export const addProduct = createAsyncThunk('addProduct', async (newProduct) => {
  const product = await setTimeout(console.log("Simulating adding product"), 100);
  return newProduct;
});

export const massDeleteProducts = createAsyncThunk('massDeleteProducts', async (targetProducts) => {
  const deleted = await deleteProducts(targetProducts);
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
      .addCase(massDeleteProducts.fulfilled, (state, action) => {    
        const removedProducts = action.payload            
        removedProducts.forEach(prod => {          
          state.data = state.data.filter( p => p.sku !== prod ); 
        });        
      });
  },
});

export default productsSlice.reducer;
export const selectData = (state) => state.products.data; 