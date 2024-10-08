import axios from 'axios';
import { AuthSlice } from './AuthSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://phonebook-backend-pxax.onrender.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      console.log('Registering with credentials:', credentials);

      const response = await axios.post('/users/signup', credentials, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      console.log('API Response:', response);
      console.log('API Response:', response.data);
      // token.set(response.data.token);
      return response.data;
    } catch (error) {
      console.error('Registration Error:', error.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('users/login', credentials);
    console.log('Login data:', data);
    token.set(data.token);

    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('users/logout');
    token.unset();
  } catch (error) {
    console.log(error.message);
  }
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const AuthReducer = AuthSlice.reducer;
