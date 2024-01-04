// import { createSelector } from 'reselect';

export const selectUser = state => {
  return state.auth.user;
};
export const selectIsLoggedIn = state => {
  return state.auth.isLoggedIn;
};

export const selectIsFetchingCurrentUser = state => {
  return state.auth.isFetchingCurrentUser;
};

// const selectAuth = state => state;
// const state = selectAuth();
// console.log(state);

// export const selectIsLoggedIn = createSelector(
//   [selectAuth],
//   auth => state.isLoggedIn
// );
