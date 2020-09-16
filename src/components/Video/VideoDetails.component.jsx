import React from 'react';
import { Link } from 'react-router-dom';
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
        maxHeight: '100vh',
        overflow: 'auto',
    },
}));

export default function VideoDetails() {
    const classes = useStyles();

    return (
        <Grid container spacing={0}>
            <Grid item lg={8} sm={8} xs={12}>
            <iframe
                width="920"
                height="485"
                title="video"
                src="https://www.youtube.com/embed/nmXMgqjQzls"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            <Typography gutterBottom align="left" variant="h5" component="h2">
                Video Title
            </Typography>
            <Typography gutterBottom align="left" variant="body2">
                This is the title description. After certain characters limit it will start a new line.
            </Typography>
        </Grid>
        <Grid item lg={4} sm={4} xs={0}>
            <List className={(classes.root, classes.sidebar)} subheader={<li />}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => {
                    return (
                        <Link to={`/video/${id}`}>
                            <ListItem key={id} alignItems="flex-start">
                                <img alt="thumbnail" className={classes.thumbnail} />
                                <ListItemText primary="Video title" />
                            </ListItem>
                        </Link>
                    )
                })}
            </List>
        </Grid>
      </Grid>
    );
}