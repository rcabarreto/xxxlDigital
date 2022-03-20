import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface UiState {
  status: string;
  searchString: string;
}

const initialState: UiState = {
  status: 'idle',
  searchString: '',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    setSearchString(state, action: PayloadAction<string>) {
      state.searchString = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase('product/fetchProducts/pending', (state) => {
        state.status = 'loading';
      })
      .addCase('product/fetchProducts/fulfilled', (state) => {
        state.status = 'idle';
      });
  },
});

export const isLoadingData = (state: RootState) => state.ui.status === 'loading';
export const selectSearchStr = (state: RootState) => state.ui.searchString;

export const { setLoading, setSearchString } = uiSlice.actions;
export default uiSlice.reducer;
