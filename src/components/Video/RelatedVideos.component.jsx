import React, { useEffect } from 'react';
import useLocalStorage from '../../utils/hooks/useLocalStorage';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { API_KEY, LOG_STYLES } from '../../utils/constants'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    thumbnail: {
        backgroundColor: theme.palette.common.grey,
        minHeight: 90,
        minWidth: 170,
    },
    sidebar: {
        maxHeight: '100vh',
        overflow: 'auto',
    },
}));

export default function RelatedVideos({id}) {
    const classes = useStyles();
    
    const [ relatedVideos, setRelatedVideos ] = useLocalStorage('relatedVideos', []);

    // TODO: fix related videos not updating
    /* eslint react-hooks/exhaustive-deps: 0 */
    useEffect(() => {
        // URL to load related videos
        const RELATED_VIDEOS_API_URL = `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=video&maxResults=20&relatedToVideoId=${id}&key=${API_KEY}`;
        // Load related videos
        async function fetchRelatedVideos() {
            try {
                const response = await fetch(RELATED_VIDEOS_API_URL);
                const results = await response.json();
                console.log('%c[INFO] Videos successfully retrieved.', LOG_STYLES.info);
                setRelatedVideos(await results.items);
            } catch (error) {
                console.log(`%c[ERROR] ${error}`, LOG_STYLES.error);
            }
        }
        
        fetchRelatedVideos();
    }, []);
    
    return (
        <List className={(classes.root, classes.sidebar)} subheader={<li />}>
            {   
                relatedVideos.map((video) => {
                    return (
                        <Link to={`/video/${video.id.videoId}`}>
                            <ListItem key={video.id.videoId} alignItems="flex-start">
                                <img src={video.snippet.thumbnails.default.url}
                                    alt={video.snippet.title}
                                    className={classes.thumbnail}
                                />
                                <ListItemText primary={video.snippet.title} />
                            </ListItem>
                        </Link>
                    )
                })   
            }
        </List>
    );
}