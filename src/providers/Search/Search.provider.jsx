import React, { useState } from 'react';

const SearchContext = React.createContext({});

export const useSearch = () => {
  const contextValue = React.useContext(SearchContext);
  if (!contextValue) {
    throw Error('Search context not found; wrap your App with <SearchProvider>');
  }

  return contextValue;
};

const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState('wizeline');

  const contextValue = {
    query,
    setQuery,
  };

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
};

export default SearchProvider;
