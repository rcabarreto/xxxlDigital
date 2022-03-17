import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface UiState {
  status: string;
}

const initialState: UiState = {
  status: 'idle',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<string>) {
      state.status = action.payload;
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

export const { setLoading } = uiSlice.actions;
export default uiSlice.reducer;
