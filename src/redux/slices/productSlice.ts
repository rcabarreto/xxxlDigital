import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import Api from '../../services/api';
import { RootState } from '../store';
import { ProductType } from '../../types';
import { PRODUCTS_PER_PAGE } from '../../constants';
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

const getSearch = (_: RootState, questionId: number) => questionId;

const getSorter = (
  _: RootState,
  sortBy: 'name' | 'price' | 'eyecatcher',
  sortDirection: 'asc' | 'desc',
  pageNum: number
) => ({
  sortBy,
  sortDirection,
  pageNum,
});

export const selectProductsFromState = (state: RootState) => state.product.list;

export const selectProductList = createSelector(selectProductsFromState, getSorter, (productList, sorter) => {
  const paginationFrom = sorter.pageNum * PRODUCTS_PER_PAGE;
  const paginationTo = paginationFrom + PRODUCTS_PER_PAGE;

  return productList
    .map((prod) => prod)
    .sort((a, b) => {
      const itemA = (a[sorter.sortBy] || 0).toString().toLowerCase();
      const itemB = (b[sorter.sortBy] || 0).toString().toLowerCase();

      return sorter.sortDirection === 'asc' ? itemA?.localeCompare(itemB || '') : itemB?.localeCompare(itemA || '');
    })
    .slice(paginationFrom, paginationTo);
});

export const selectTotalPageCount = createSelector(
  selectProductsFromState,
  (products: ProductType[]) =>
    parseInt(`${products.length / PRODUCTS_PER_PAGE}`) + (!!(products.length % PRODUCTS_PER_PAGE) ? 1 : 0)
);

export default companySlice.reducer;
