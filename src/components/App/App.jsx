import { Routes, Route, Navigate } from 'react-router-dom';
import { refreshCurrentUser } from '../../redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { selectIsFetchingCurrentUser } from '../../redux/auth/selectors';
import { Container } from './App.styled';
import Layout from '../Layout/Layout';
import Loader from '../Loader/Loader';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicRoute from '../PublicRoute/PublicRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

const App = () => {
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return isFetchingCurrentUser ? (
    <Loader />
  ) : (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <Suspense fallback={<Loader />}>
                <PublicRoute>
                  <RegistrationPage />
                </PublicRoute>
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<Loader />}>
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              </Suspense>
            }
          />

          <Route
            path="/contacts"
            element={
              <Suspense fallback={<Loader />}>
                <PrivateRoute path="/contacts">
                  <ContactsPage />
                </PrivateRoute>
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
};

export default App;
