import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  thumbnail: {
    backgroundColor: theme.palette.common.grey,
    height: 90,
    width: 170,
  },
  sidebar: {
    maxHeight: 485,
    overflow: 'auto'
  },
  videoContainer: {
    width: '100%',
  }
}));

function VideoPage() {
  const classes = useStyles();
  const sectionRef = useRef(null);

  return (
    <section className={classes.videoContainer} ref={sectionRef}>
      <Grid container spacing={0}>
        <Grid item lg={8} sm={8} xs={12}>
            <iframe width="920" height="485" title="video"
                src="https://www.youtube.com/embed/nmXMgqjQzls" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <Typography gutterBottom align="left" variant="h5" component="h2">
                Video Title
            </Typography>
            <Typography gutterBottom align="left" variant="body2">
                Video description
            </Typography>
        </Grid>
        <Grid item lg={4} sm={4} xs={0}>
            <List className={classes.root, classes.sidebar} subheader={<li />}>
                <ListItem alignItems='flex-start'>
                    <img alt="thumbnail" className={classes.thumbnail}></img>
                    <ListItemText primary={`Video title`} />
                </ListItem>
                <ListItem alignItems='flex-start'>
                    <img alt="thumbnail" className={classes.thumbnail}></img>
                    <ListItemText primary={`Video title`} />
                </ListItem>
                <ListItem alignItems='flex-start'>
                    <img alt="thumbnail" className={classes.thumbnail}></img>
                    <ListItemText primary={`Video title`} />
                </ListItem>
                <ListItem alignItems='flex-start'>
                    <img alt="thumbnail" className={classes.thumbnail}></img>
                    <ListItemText primary={`Video title`} />
                </ListItem>
                <ListItem alignItems='flex-start'>
                    <img alt="thumbnail" className={classes.thumbnail}></img>
                    <ListItemText primary={`Video title`} />
                </ListItem>
                <ListItem alignItems='flex-start'>
                    <img alt="thumbnail" className={classes.thumbnail}></img>
                    <ListItemText primary={`Video title`} />
                </ListItem>
                <ListItem alignItems='flex-start'>
                    <img alt="thumbnail" className={classes.thumbnail}></img>
                    <ListItemText primary={`Video title`} />
                </ListItem>
            </List>
        </Grid>
      </Grid>
    </section>
  );
}

export default VideoPage;