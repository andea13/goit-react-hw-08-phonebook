import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { refreshCurrentUser } from '../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
// import { selectIsLoggedIn } from '../redux/auth/selectors';
// import { useSelector } from 'react-redux';

const App = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  const HomePage = lazy(() => import('pages/HomePage'));
  const ContactsPage = lazy(() => import('pages/ContactsPage'));
  const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
  const LoginPage = lazy(() => import('pages/LoginPage'));

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 20,
        fontSize: 30,
        color: '#010101',
      }}
    >
      <Layout />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/register" element={<RegistrationPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/contacts" element={<ContactsPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
