import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

/* import { useAuth } from '../../providers/Auth'; */
import './Favorites.styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    backgroundColor: theme.palette.common.grey,
    height: 140,
  },
}));

function FavoritesPage() {
  const classes = useStyles();
  const sectionRef = useRef(null);
  /* const { authenticated, logout } = useAuth(); */

  return (
    <section className="favorites" ref={sectionRef}>
      <Grid container spacing={0}>
        <Grid item lg={2} sm={2} xs={2} />
        <Grid item container spacing={2} lg={8} sm={8} xs={8}>
          <Grid item lg={4} sm={5} xs={10}>
            <Card className={classes.root}>
              <CardActionArea>
                <Link to="/video/id">
                  <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom align="left" variant="h5" component="h2">
                      Lorem ipsum
                    </Typography>
                    <Typography
                      align="left"
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                      rhoncus sapien quis auctor ullamcorper.
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="secondary">
                  Remove from favorites
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={4} sm={5} xs={10}>
            <Card className={classes.root}>
              <CardActionArea>
                <Link to="/video/id">
                  <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom align="left" variant="h5" component="h2">
                      Lorem ipsum
                    </Typography>
                    <Typography
                      align="left"
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                      rhoncus sapien quis auctor ullamcorper.
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="secondary">
                  Remove from favorites
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid item lg={2} sm={2} xs={2} />
      </Grid>
    </section>
  );
}

export default FavoritesPage;
