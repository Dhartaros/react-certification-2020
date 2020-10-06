import React from 'react';
import { Link } from 'react-router-dom';
/* Styles */
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
/* Utils */
import useLocalStorage from '../../utils/hooks/useLocalStorage';
/* Providers */
import { useAuth } from '../../providers/Auth';
import { useFavorite } from '../../utils/store/FavoriteProvider';

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
  const { favorite } = useFavorite();

  const [, setCurrentVideo] = useLocalStorage('currentVideo', {});
  const [favoriteVideos, setFavoriteVideos] = useLocalStorage('favoriteVideos', []);

  function changeVideo() {
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

  function toggleFavorite() {
    const clickedVideo = {
      id: { videoId: id },
      snippet: {
        title,
        description,
        thumbnails: { medium: { url: thumbnail } },
      },
    };

    const newFavoriteVideos = favorite(favoriteVideos, clickedVideo);

    setFavoriteVideos(newFavoriteVideos);
  }

  return (
    <Grid item lg={4} sm={5} xs={10}>
      <Video>
        <CardActionArea>
          <Link to={`/video/${id}`} onClick={changeVideo}>
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
