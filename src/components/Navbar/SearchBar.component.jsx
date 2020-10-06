import React from 'react';
/* Styles */
import styled from 'styled-components';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
/* Providers */
import { useSearch } from '../../providers/Search';

const Container = styled.div`
  position: relative;
  background-color: ${fade('#fff', 0.15)};
  &:hover {
    backgroundcolor: ${fade('#fff', 0.25)};
  }
  margin-left: 0;
  width: 100%;
`;

const Icon = styled.div`
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled(InputBase)`
  color: white !important;
  width: 100%;
`;

const useStyles = makeStyles((theme) => ({
  search: {
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
  },
  input: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function SearchBar() {
  const classes = useStyles();
  const { query, setQuery } = useSearch();

  const handleChange = (event) => setQuery(event.target.value);

  return (
    <Container className={classes.search}>
      <Icon className={classes.searchIcon}>
        <SearchIcon />
      </Icon>
      <Input
        className={classes.input}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        value={query}
        onChange={handleChange}
      />
    </Container>
  );
}
