import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SearchBar from './SearchBar.component';
import Sidebar from './Sidebar.component';
import UserMenu from './UserMenu.component';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  flex-grow: 100%;
`;

const WizetubeNavbar = styled(AppBar)`
  background-color: #F2575D !important;
  margin-bottom: 5em;
`;

const Icon = styled(Typography)`
  display: flex;
  align-items: center;
`;

export default function Navbar() {
  const location = useLocation();

  return (
    <Container>
      <WizetubeNavbar position="sticky">
        <Toolbar>
          <Sidebar />
          <Icon variant="h6" noWrap >
            Wize
            <PlayArrowIcon />
            Tube
          </Icon>
            {
              location.pathname === '/' ? <SearchBar /> : undefined
            }
          <Container />
          <UserMenu />
        </Toolbar>
      </WizetubeNavbar>
    </Container>
  );
}
