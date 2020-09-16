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

export default function Video({id, title, description, thumbnail}) {
    const classes = useStyles();
    const { authenticated } = useAuth();

    return (
        <Grid item lg={4} sm={5} xs={10}>
            <Card className={classes.root}>
                <CardActionArea>
                    <Link to={`/video/${id}`}>
                        <CardMedia
                            className={classes.media}
                            image={thumbnail}
                            title={title}
                        />
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
                    <Button size="small" color="secondary">
                        Add to favorites
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