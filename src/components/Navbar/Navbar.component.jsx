import React from 'react';
import { Link } from 'react-router-dom';
/* Styles */
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
/* Components */
import SearchBar from './SearchBar.component';
import Sidebar from './Sidebar.component';
import UserMenu from './UserMenu.component';

const Container = styled.div`
  flex-grow: 100%;
`;

const WizetubeNavbar = styled(AppBar)`
  background-color: #f2575d !important;
  margin-bottom: 5em;
`;

const Logo = styled(Typography)`
  display: flex;
  align-items: center;
`;

export default function Navbar() {
  return (
    <Container>
      <WizetubeNavbar position="sticky">
        <Toolbar>
          <Sidebar />
          <Link to="/">
            <Logo variant="h6" noWrap>
              Wize
              <PlayArrowIcon />
              Tube
            </Logo>
          </Link>
          <SearchBar />
          <Container />
          <UserMenu />
        </Toolbar>
      </WizetubeNavbar>
    </Container>
  );
}
