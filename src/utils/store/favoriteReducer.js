import { ACTIONS } from './favoriteActions';

export const initState = {
  favoriteVideos: [],
};

function favoriteReducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.TOGGLE_FAVORITE:
      return { ...state, favorites: payload.favoriteVideos };
    default:
      return state;
  }
}

export default favoriteReducer;
