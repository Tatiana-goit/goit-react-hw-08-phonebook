import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from '../../utils/notifications';
import * as contactsApi from '../../services/PhonebookApi';

export const register = createAsyncThunk(
  'users/register',
  async (user, { rejectWithValue }) => {
    try {
      const result = await contactsApi.register(user);
      Notify.success('You have successfully registered!');
      return result;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const login = createAsyncThunk(
  'users/login',
  async (user, { rejectWithValue }) => {
    try {
      const result = await contactsApi.login(user);
      Notify.success(
        "Login successful!\n",
        `Welcome back, ${result.user.name}!`,
        3000
      );
      return result;
    } catch (error) {
      Notify.error('Incorrect email or password');
      return rejectWithValue(error.message);
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
    try {
      const result = await contactsApi.currentUser();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      await contactsApi.logout();
      Notify.info('You have been logged out!');
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// export const register = createAsyncThunk(
//   'users/register',
//   async (user, { rejectWithValue }) => {
//     try {
//       const result = await axios.post('/users/signup', user);
//       token.set(result.data.token);
//       return result.data;
//     } catch (error) {
//       rejectWithValue(error.message);
//     }
//   },
// );

// export const login = createAsyncThunk(
//   'users/login',
//   async (user, { rejectWithValue }) => {
//     try {
//       const result = await axios.post('/users/login', user);
//       token.set(result.data.token);
//       return result.data;
//     } catch (error) {
//       rejectWithValue(error.message);
//     }
//   },
// );

// export const currentUser = createAsyncThunk(
//   'users/currentUser',
//   async (_, { rejectWithValue, getState }) => {
//     const state = getState();
//     const token = state.auth.token;
//     if (!token) return rejectWithValue();
//     token.set(token);
//     try {
//       const result = await axios.get('/users/current');
//       return result;
//     } catch (error) {
//       rejectWithValue(error.message);
//     }
//   },
// );

// export const logout = createAsyncThunk(
//   'users/logout',
//   async (_, { rejectWithValue }) => {
//     try {
//       await axios.post('/users/logout');
//       token.unset();
//     } catch (error) {
//       rejectWithValue(error.message);
//     }
//   },
// );
