import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//// сделать end-point

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'users/register',
  async (user, { rejectWithValue }) => {
    try {
      const result = await axios.post('/users/signup', user);
      token.set(result.data.token);
      console.log(result.data);
      return result.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const login = createAsyncThunk(
  'users/login',
  async (user, { rejectWithValue }) => {
    try {
      const result = await axios.post('/users/login', user);
      token.set(result.data.token);
      return result.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const currentUser = createAsyncThunk(
  'users/currentUser',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;
    if (!token) return rejectWithValue();
    token.set(token);
    console.log('!!!!!!!');
    try {
      const result = await axios.get('/users/current');
      return result;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);
