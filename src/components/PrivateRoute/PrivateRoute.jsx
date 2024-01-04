import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsFetchingCurrentUser,
} from '../../redux/auth/selectors';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);
  const shouldRedirect = !isLoggedIn && !isFetchingCurrentUser;
  return shouldRedirect ? <Navigate to="/login" /> : children;
}
