import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import Api from '../../services/api';
import { RootState } from '../store';
import { ProductType } from '../../types';

export interface companyState {
  list: ProductType[];
}

const initialState: companyState = {
  list: [],
};

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const api = new Api();
  const response: ProductType[] = await api.loadProducts();
  return response;
});

export const companySlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const selectProducts = (state: RootState) => state.product.list;

export const selectProductList = createSelector(selectProducts, (products: ProductType[]) => products);

export default companySlice.reducer;
