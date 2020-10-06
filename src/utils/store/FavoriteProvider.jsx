import React from "react";
import favoriteActions from "./favoriteActions";
import favoriteReducer, { initState } from "./favoriteReducer";

const FavoriteContext = React.createContext({});

export const useFavorite = () => {
  const contextValue = React.useContext(FavoriteContext);

  if (!contextValue) {
    throw Error("Favorite context not found; wrap your App with <FavoriteProvider>");
  }
  return contextValue;
};

const FavoriteProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(favoriteReducer, initState);

  const contextValue = {
    ...state,
    favorite: favoriteActions.toggleFavorite(dispatch)
  };

  return <FavoriteContext.Provider value={contextValue}>{children}</FavoriteContext.Provider>;
};

export default FavoriteProvider;