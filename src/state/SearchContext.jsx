import React from 'react';

const SearchContext = React.createContext({
  query: {},
  setQuery: () => {},
});

export default SearchContext;
