import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filtered: (_, action) => action.payload,
  },
});

export const { filtered } = filterSlice.actions;
export default filterSlice.reducer;
