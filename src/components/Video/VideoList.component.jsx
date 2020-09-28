import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import useLocalStorage from '../../utils/hooks/useLocalStorage';
import { useQuery } from '../../utils/hooks/useQuery';
import VideoThumbnail from './VideoThumbnail.component';
import { API_KEY, LOG_STYLES } from '../../utils/constants';
import VideoContext from '../../state/VideoContext';

export default function VideoList() {
  const { videoList, setVideoList } = useContext(VideoContext);
  const { query } = useQuery();
  const [, setCurrentVideo] = useLocalStorage('currentVideo');
  const [favoriteVideos] = useLocalStorage('favoriteVideos', []);
  const location = useLocation();

  /* eslint react-hooks/exhaustive-deps: 0 */
  useEffect(() => {
    const API_URL = `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=video&maxResults=21&q=${query}&key=${API_KEY}`;

    setCurrentVideo({});

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
  }, []);

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
