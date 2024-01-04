import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (payload, thunkAPI) => {
    const contactToAdd = {
      name: payload.name,
      number: payload.number,
      id: payload.id,
    };

    const options = {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    try {
      const response = await axios.post('/contacts', contactToAdd, options);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    const options = {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    try {
      const response = await axios.delete(`/contacts/${id}`, options);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
