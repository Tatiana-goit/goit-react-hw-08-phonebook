import { createSlice } from '@reduxjs/toolkit';
import { register,login, currentUser,logout } from './auth-operation';

const initialState = {
  user: { name: '', email: '' },
  token: '',
  error: null,
  isLoading: false,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    [register.fulfilled]: (state, action) => ({
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      isLoading: false,
      isAuth: true,
    }),
    [register.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [register.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
      isLoading: false,
    //   isAuth: false,
    }),

    [login.fulfilled]: (state, action) => ({
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        isAuth: true,
      }),
      [login.pending]: (state) => ({
        ...state,
        isLoading: true,
      }),
      [login.rejected]: (state, action) => ({
        ...state,
        error: action.payload,
        isLoading: false,
      //   isAuth: false,
      }),

      [currentUser.fulfilled]: (state, action) => ({
        ...state,
        user: action.payload,
        isLoading: false,
        isAuth: true,
      }),
      [currentUser.pending]: (state) => ({
        ...state,
        isLoading: true,
      }),
      [currentUser.rejected]: (state, action) => ({
        ...state,
        error: action.payload,
        isLoading: false,
        isAuth: false,
      }),

      [logout.fulfilled]: (state, action) => ({
        ...state,
        user:  { name: '', email: '' },
        token: '',
        isLoading: false,
        isAuth: false,
      }),
      [logout.pending]: (state) => ({
        ...state,
        isLoading: true,
      }),
      [logout.rejected]: (state, action) => ({
        ...state,
        error: action.payload,
        isLoading: false,
      //   isAuth: false,
      }),
  },
});

export default authSlice.reducer;
