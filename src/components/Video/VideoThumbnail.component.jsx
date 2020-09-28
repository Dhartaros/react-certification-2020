import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useLocalStorage from '../../utils/hooks/useLocalStorage';
import { LOG_STYLES } from '../../utils/constants';

import { useAuth } from '../../providers/Auth';

const Video = styled(Card)`
  flex-grow: 1;
`;

const Thumbnail = styled(CardMedia)`
  background-color: grey;
  height: 140px;
`;

const Title = styled(Typography)`
  color: black !important;
`;

export default function VideoThumbnail({ id, title, description, thumbnail }) {
  const { authenticated } = useAuth();

  const [, setCurrentVideo] = useLocalStorage('currentVideo', {});
  const [favoriteVideos, setFavoriteVideos] = useLocalStorage('favoriteVideos', []);

  function handleClick() {
    setCurrentVideo({
      id: {
        videoId: id,
      },
      snippet: {
        title: title,
        description: description,
      },
    });
  }
  // TODO: Fix favorite behaviour
  function toggleFavorite() {
    const videoToAdd = {
      id: {
        videoId: id,
      },
      snippet: {
        title,
        description,
        thumbnails: {
          medium: {
            url: thumbnail,
          },
        },
      },
    };

    try {
      const videoIndex = favoriteVideos.findIndex((video) => video.id.videoId === id);
      if (videoIndex >= 0) {
        const filteredVideos = favoriteVideos.filter((video) => video.id.videoId !== id);
        setFavoriteVideos(filteredVideos);
        console.log(
          '%c[INFO] Video successfully removed from favorites.',
          LOG_STYLES.info
        );
      } else {
        const favorites = favoriteVideos.concat(videoToAdd);
        setFavoriteVideos(favorites);
        console.log('%c[INFO] Video successfully added to favorites.', LOG_STYLES.info);
        console.log(favoriteVideos);
      }
    } catch (error) {
      console.log(
        '%c[WARN] There are no favorite videos added. Ignore the following error message.',
        LOG_STYLES.warn
      );
      console.log(`%c[ERROR] ${error}`, LOG_STYLES.error);
      const favorites = favoriteVideos.concat(videoToAdd);
      setFavoriteVideos(favorites);
      console.log('%c[INFO] Video successfully added to favorites.', LOG_STYLES.info);
    }
  }

  return (
    <Grid item lg={4} sm={5} xs={10}>
      <Video>
        <CardActionArea>
          <Link to={`/video/${id}`} onClick={handleClick}>
            <Thumbnail image={thumbnail} title={title} />
            <CardContent>
              <Title gutterBottom align="left" variant="h5" component="h2">
                {title}
              </Title>
              <Typography
                align="left"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {description}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions>
          {authenticated ? (
            <Button size="small" color="secondary" onClick={toggleFavorite}>
              {favoriteVideos.findIndex((video) => video.id.videoId === id) < 0
                ? 'Add to favorites'
                : 'I LOVE THIS!'}
            </Button>
          ) : (
            <Link to="/login">
              <Button size="small" color="secondary">
                Login to add to your favorites
              </Button>
            </Link>
          )}
        </CardActions>
      </Video>
    </Grid>
  );
}
