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

const getSearchAndSort = (
  _: RootState,
  searchStr: string,
  sortBy: 'name' | 'price' | 'eyecatcher',
  sortDirection: 'asc' | 'desc',
  pageNum: number
) => ({
  searchStr,
  sortBy,
  sortDirection,
  pageNum,
});

export const selectProductsFromState = (state: RootState) => state.product.list;

export const selectProductList = createSelector(
  selectProductsFromState,
  getSearchAndSort,
  (productList, searchAndSorter) => {
    return productList
      .filter(
        (product) =>
          product.name.toLowerCase().includes(searchAndSorter.searchStr.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchAndSorter.searchStr.toLowerCase())
      )
      .sort((a, b) => {
        const itemA = (
          a[searchAndSorter.sortBy === 'price' && !!a.eyecatcher ? 'priceSale' : searchAndSorter.sortBy] || 0
        )
          .toString()
          .toLowerCase();
        const itemB = (
          b[searchAndSorter.sortBy === 'price' && !!b.eyecatcher ? 'priceSale' : searchAndSorter.sortBy] || 0
        )
          .toString()
          .toLowerCase();

        return searchAndSorter.sortDirection === 'asc'
          ? itemA?.localeCompare(itemB || '')
          : itemB?.localeCompare(itemA || '');
      });
  }
);

export default companySlice.reducer;
