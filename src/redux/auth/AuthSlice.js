import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, refreshCurrentUser } from './authOperations';
import {
  handleRegisterFulfilled,
  handleLoginFulfilled,
  handleLogOutFulfilled,
  handleFetchCurrentUserFulfilled,
  handlePending,
  handleRejected,
  handleFetchCurrentUserPending,
  handleFetchCurrentUserRejected,
} from './handleActionFunctions';

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(register.fulfilled, handleRegisterFulfilled)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, handleLoginFulfilled)
      .addCase(login.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshCurrentUser.pending, handleFetchCurrentUserPending)
      .addCase(refreshCurrentUser.fulfilled, handleFetchCurrentUserFulfilled)
      .addCase(refreshCurrentUser.rejected, handleFetchCurrentUserRejected);
  },
});
