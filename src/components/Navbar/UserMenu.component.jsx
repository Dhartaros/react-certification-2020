import React from 'react';
import { Link, useHistory } from 'react-router-dom';
/* Styles */
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
/* Providers */
import { useAuth } from '../../providers/Auth';

const Container = styled.div`
  display: flex;
  margin-left: auto;
`;

const LoginLink = styled(Link)`
  color: black;
`;

const User = styled(Avatar)`
  background-color: #2196F3 !important;
`;

export default function UserMenu() {
  const history = useHistory();
  const { authenticated, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';

  return (
    <Container>
      {authenticated ? (
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <User>W</User>
        </IconButton>
      ) : (
        <IconButton
          edge="end"
          aria-label="guest user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      )}
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        {authenticated ? (
          <MenuItem onClick={deAuthenticate}>Logout</MenuItem>
        ) : (
          <MenuItem onClick={handleMenuClose}>
            <LoginLink to="/login">
              Sign In
            </LoginLink>
          </MenuItem>
        )}
      </Menu>
    </Container>
  );
}
