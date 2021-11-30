import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//// сделать end-point

export const register = createAsyncThunk(
  'users/register',
  async (user, { rejectWithValue  }) => {
    try {
      const result = await axios.post('/users/signup', user);
      //   console.log('result', result.data);
      return result.data;
    } catch (error) {
        rejectWithValue ({ error: error.message });
    }
  },
);

export const login = createAsyncThunk(
  'users/login',
  async (user, { rejectWithValue  }) => {
    try {
      const result = await axios.post('/users/login', user);
      // console.log('result', result.data);
      return result.data;
    } catch (error) {
        rejectWithValue ({ error: error.message });
    }
  },
);

export const currentUser = createAsyncThunk(
  'users/currentUser',
  async (_, { rejectWithValue  ,getState} ) => {
    const state = getState();
    const token = state.auth.token;
    // console.log('store',state.auth.token);
    if (!token) return;
    try {
      const result = await axios.get('/users/current');
    //   console.log('result', result);
      return result;
    } catch (error) {
        rejectWithValue ({ error: error.message });
    }
  },
);

export const logout = createAsyncThunk(
    'users/logout',
    async (_, { rejectWithValue } ) => {

      try {
        const result = await axios.post('/users/logout');
        console.log('result', result);
        return result;
      } catch (error) {
        rejectWithValue ({ error: error.message });
      }
    },
  );
