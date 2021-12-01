import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//////сделать дополнительный файл для запроса

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get('/contacts');
      return result.data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const result = await axios.post('/contacts', contact);
      return result.data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
// попробуй так как Наира написала, тоже похожая ошибка была с id:
