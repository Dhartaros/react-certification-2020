import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SearchBar from './SearchBar.component';
import Sidebar from './Sidebar.component';
import UserMenu from './UserMenu.component';

const Container = styled.iframe`
    flex-grow: 100%;
`;

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  navbar: {
    backgroundColor: '#F2575D',
    marginBottom: '5em',
  },
  textWithIcon: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <Container>
      <AppBar className={classes.navbar} position="sticky">
        <Toolbar>
          <Sidebar />
          <Typography
            className={(classes.title, classes.textWithIcon)}
            variant="h6"
            noWrap
          >
            Wize
            <PlayArrowIcon />
            Tube
          </Typography>
          <SearchBar />
          <div className={classes.grow} />
          <UserMenu />
        </Toolbar>
      </AppBar>
    </Container>
  );
}
