export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleRegisterFulfilled = (state, action) => {
  console.log(action.payload);
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = null;
  state.user = action.payload.user;
  state.token = action.payload.token;
};

export const handleLoginFulfilled = (state, action) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.error = null;
  state.user = action.payload.user;
  state.token = action.payload.token;
};

export const handleLogOutFulfilled = state => {
  state.isLoading = false;
  state.isLoggedIn = false;
  state.error = null;
  state.user = { name: null, email: null, password: null };
  state.token = null;
};

export const handleFetchCurrentUserFulfilled = (state, action) => {
  state.user = { ...action.payload };
  state.isLoggedIn = true;
  console.log(action);
};
