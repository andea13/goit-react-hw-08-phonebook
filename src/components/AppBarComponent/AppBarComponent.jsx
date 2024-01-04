import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { useSelector } from 'react-redux';
import { AppBarWrapper } from './AppBarComponent.styled';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const AppBarComponent = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <AppBarWrapper>
              <Navigation />
              {isLoggedIn ? <UserMenu /> : <AuthMenu />}
            </AppBarWrapper>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarComponent;
