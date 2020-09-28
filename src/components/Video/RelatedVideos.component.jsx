import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { API_KEY, LOG_STYLES } from '../../utils/constants';
import useLocalStorage from '../../utils/hooks/useLocalStorage';

const Container = styled(List)`
    max-heigth: 100vh;
    overflow auto;
`;

const Thumbnail = styled.img`
    background-color: grey;
    min-height: 90px;
    min-width: 170px;
`;

const Title = styled(ListItemText)`
    color: black !important;
`;

export default function RelatedVideos({ id }) {
    const [relatedVideos, setRelatedVideos] = useLocalStorage('relatedVideos', []);

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
    <Container subheader={<li />}>
        {relatedVideos.map((video) => {
            return (
                <Link to={`/video/${video.id.videoId}`}>
                    <ListItem key={video.id.videoId} alignItems="flex-start">
                    <Thumbnail
                        src={video.snippet.thumbnails.default.url}
                        alt={video.snippet.title}
                    />
                    <Title primary={video.snippet.title} />
                    </ListItem>
                </Link>
            );
        })}
    </Container>
  );
}
