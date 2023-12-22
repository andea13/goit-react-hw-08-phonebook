import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      {/* <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} /> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};
