import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    backgroundColor: theme.palette.common.grey,
    height: 140,
  },
}));

export default function VideoThumbnail({ id, title, description, thumbnail }) {
  const classes = useStyles();
  const { authenticated } = useAuth();

  const [, setCurrentVideo] = useLocalStorage('currentVideo', {});
  const [favoriteVideos, setFavoriteVideos] = useLocalStorage('favoriteVideos', []);

  function handleClick() {
    setCurrentVideo({
      id: {
        videoId: id,
      },
      snippet: {
        title,
        description,
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
      <Card className={classes.root}>
        <CardActionArea>
          <Link to={`/video/${id}`} onClick={handleClick}>
            <CardMedia className={classes.media} image={thumbnail} title={title} />
            <CardContent>
              <Typography gutterBottom align="left" variant="h5" component="h2">
                {title}
              </Typography>
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
            <Link to="/login" className={classes.link}>
              <Button size="small" color="secondary">
                Login to add to your favorites
              </Button>
            </Link>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}
