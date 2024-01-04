import { Outlet } from 'react-router-dom';
import AppBarComponent from '../AppBarComponent/AppBarComponent';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';

const Layout = () => {
  return (
    <div>
      <AppBarComponent />
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default Layout;
