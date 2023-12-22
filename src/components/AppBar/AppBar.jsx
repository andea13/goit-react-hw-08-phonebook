import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { useDispatch } from 'react-redux';
import { AppBarWrapper } from './AppBar.styled';

const AppBar = () => {
  return (
    <AppBarWrapper>
      <Navigation />
      <AuthMenu />
      {/* {isLoggedIn ? <UserMenu /> : <AuthMenu />} */}
    </AppBarWrapper>
  );
};

export default AppBar;
