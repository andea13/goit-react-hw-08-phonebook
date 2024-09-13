export const selectUser = state => {
  console.log('State:', state);
  return state.auth.user;
};
export const selectIsLoggedIn = state => {
  return state.auth.isLoggedIn;
};

export const selectIsFetchingCurrentUser = state => {
  return state.auth.isFetchingCurrentUser;
};
