import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../../services/PhonebookApi';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const result = await contactsApi.fetchContacts();
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const result = await contactsApi.addContact(contact);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await contactsApi.deleteContact(contactId);
      return contactId;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
