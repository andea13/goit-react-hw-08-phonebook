export const handlePending = state => {
  state.isLoggedIn = false;
};

export const handleRejected = (state, action) => {
  state.error = action.payload;
};

export const handleRegisterFulfilled = (state, action) => {
  console.log('State before update:', state);
  console.log('Action:', action);
  if (action.payload && action.payload.email && action.payload.name) {
    console.log('Payload:', action.payload);
    state.isLoggedIn = false;
    state.error = null;
    state.user = {
      name: action.payload.name,
      email: action.payload.email,
    };
    state.token = action.payload.token || '';
    console.log('State updated successfully', state);
  } else {
    console.error('Invalid action payload:', action.payload);
  }
};

export const handleLoginFulfilled = (state, action) => {
  state.isLoggedIn = true;
  state.error = null;
  state.user = action.payload.user;
  state.token = action.payload.token;
};

export const handleLogOutFulfilled = state => {
  state.isLoggedIn = false;
  state.error = null;
  state.user = { name: null, email: null, password: null };
  state.token = null;
};

export const handleFetchCurrentUserPending = state => {
  state.isFetchingCurrentUser = true;
};

export const handleFetchCurrentUserFulfilled = (state, action) => {
  state.user = { ...action.payload };
  state.isLoggedIn = true;
  state.isFetchingCurrentUser = false;
};

export const handleFetchCurrentUserRejected = (state, action) => {
  state.isFetchingCurrentUser = false;
  state.error = action.payload;
};
