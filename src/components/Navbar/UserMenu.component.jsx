import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  link: {
    color: 'black',
  },
  cyan: {
    backgroundColor: '#2196f3',
  },
}));

export default function UserMenu() {
  const classes = useStyles();
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
    <div>
      <div className={classes.sectionDesktop}>
        {authenticated ? (
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar className={classes.cyan}>W</Avatar>
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
              <Link to="/login" className={classes.link}>
                Sign In
              </Link>
            </MenuItem>
          )}
        </Menu>
      </div>
    </div>
  );
}
