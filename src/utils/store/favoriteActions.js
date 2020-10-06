import { LOG_STYLES } from '../constants';

export const ACTIONS = {
  TOGGLE_FAVORITE: Symbol('TOGGLE_FAVORITE'),
};

function addToFavorites(videoList, videoToAdd) {
  console.log('%c[INFO] Video successfully added to favorites.', LOG_STYLES.info);
  return videoList.concat(videoToAdd);
}

function changeFavoriteStatus(videoList, clickedVideo) {
  try {
    const videoIndex = videoList.findIndex(
      (video) => video.id.videoId === clickedVideo.id.videoId
    );

    if (videoIndex >= 0) {
      const filteredVideos = videoList.filter(
        (video) => video.id.videoId !== clickedVideo.id.videoId
      );
      console.log('%c[INFO] Video successfully removed from favorites.', LOG_STYLES.info);

      return filteredVideos;
    }
    const favorites = addToFavorites(videoList, clickedVideo);
    return favorites;
  } catch (error) {
    console.log(
      '%c[WARN] There are no favorite videos added. Ignore the following error message.',
      LOG_STYLES.warn
    );
    console.log(`%c[ERROR] ${error}`, LOG_STYLES.error);
    const favorites = addToFavorites(videoList, clickedVideo);
    return favorites;
  }
}

const toggleFavorite = (dispatch) => (videoList, clickedVideo) => {
  const favoriteVideos = changeFavoriteStatus(videoList, clickedVideo);

  dispatch({
    type: ACTIONS.TOGGLE_FAVORITE,
    payload: { favoriteVideos },
  });

  return favoriteVideos;
};

const favoriteActions = { toggleFavorite };

export default favoriteActions;
