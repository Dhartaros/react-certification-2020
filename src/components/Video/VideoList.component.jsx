import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
/* Styles */
import Grid from '@material-ui/core/Grid';
/* Components */
import VideoThumbnail from './VideoThumbnail.component';
/* Utils */
import useLocalStorage from '../../utils/hooks/useLocalStorage';
import { API_KEY, LOG_STYLES } from '../../utils/constants';
/* Providers */
import { useVideo } from '../../providers/Video';
import { useSearch } from '../../providers/Search';

export default function VideoList() {
  const { videoList, setVideoList } = useVideo();
  const { query } = useSearch();
  const [favoriteVideos] = useLocalStorage('favoriteVideos', []);
  const location = useLocation();

  // Turned off because using setters as dependencies are creating infinite loops
  /* eslint react-hooks/exhaustive-deps: 0 */
  useEffect(() => {
    const API_URL = `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=video&maxResults=21&q=${query}&key=${API_KEY}`;

    async function fetchVideos() {
      try {
        const response = await fetch(API_URL);
        const results = await response.json();
        console.log('%c[INFO] Videos successfully retrieved.', LOG_STYLES.info);
        setVideoList(await results.items);
      } catch (error) {
        console.log(`%c[ERROR] ${error}`, LOG_STYLES.error);
      }
    }

    if (location.pathname === '/favorites') {
      setVideoList(favoriteVideos);
    } else {
      fetchVideos();
    }
  }, [query, location, favoriteVideos]);

  return (
    <Grid container spacing={0}>
      <Grid item lg={2} md={2} sm={2} xs={2} />
      <Grid item container spacing={2} lg={8} md={10} sm={10} xs={10}>
        {videoList.map((video) => {
          return (
            <VideoThumbnail
              key={video.id.videoId}
              id={video.id.videoId}
              title={video.snippet.title}
              description={video.snippet.description}
              thumbnail={video.snippet.thumbnails.medium.url}
            />
          );
        })}
      </Grid>
      <Grid item lg={2} md={2} sm={2} xs={2} />
    </Grid>
  );
}
