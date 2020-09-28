import React, { useEffect } from 'react';
import useLocalStorage from '../../utils/hooks/useLocalStorage';
import { makeStyles } from '@material-ui/core/styles';
import { API_KEY, LOG_STYLES } from '../../utils/constants'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    wrapper: {
        position: 'relative',
        paddingBottom: '56.25%',
    },
    video: {
        width: '100%',
        height: '100%',
    },
}));

export default function Video({id}) {
    const classes = useStyles();
    const [ currentVideo, setCurrentVideo ] = useLocalStorage('currentVideo');

    // TODO: fix title and description not updating
    /* eslint react-hooks/exhaustive-deps: 0 */
    useEffect(() => {
        // URL to load YouTube video & info
        const VIDEO_INFO_API_URL = `https://www.googleapis.com/youtube/v3/videos?part=id,snippet&id=${id}&key=${API_KEY}`;
        // Load YouTube video
        async function fetchVideoInfo() {
            try {
                const response = await fetch(VIDEO_INFO_API_URL);
                const result = await response.json();
                console.log('%c[INFO] Video info successfully retrieved.', LOG_STYLES.info);
                setCurrentVideo(await result.items);
            } catch (error) {
                console.log(`%c[ERROR] ${error}`, LOG_STYLES.error);
            }
        }

        fetchVideoInfo();
    }, []);
    
    return (
        <Grid item lg={7} sm={7} xs={11} >
                <iframe className={classes.video}
                    title="video"
                    src={`https://www.youtube.com/embed/${id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            <Typography gutterBottom align="left" variant="h5" component="h2">
                { currentVideo === "undefined" ? currentVideo.snippet.title : "" }
            </Typography>
            <Typography gutterBottom align="left" variant="body2">
                { currentVideo === "undefined" ? currentVideo.snippet.description : "" }
            </Typography>
        </Grid>
    );
}