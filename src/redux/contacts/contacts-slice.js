import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contactItem: [], loading: false, error: null },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => ({
      ...state,
      contactItem: action.payload,
      loading: false,
      }),
    [fetchContacts.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [fetchContacts.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),

    [addContact.fulfilled]: (state, action) => ({
      ...state,
      contactItem: [...state.contactItem, action.payload],
      loading: false,
     }),
    [addContact.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [addContact.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),

    [deleteContact.fulfilled]: (state, action) => ({
      ...state,
      contactItem: state.contactItem.filter(({ id }) => id !== action.payload),
      loading: false,
     }),
    [deleteContact.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [deleteContact.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
});

export default contactSlice.reducer;
