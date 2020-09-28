import React from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Video from './Video.component';
import RelatedVideos from './RelatedVideos.component'

export default function VideoDetails() {
    const videoId = useParams();

    return (
        <Grid container spacing={0}>
            <Grid item lg={1} sm={1} xs={1} />
            <Grid item lg={7} sm={7} xs={11} >
                <Video id={videoId.id} />
            </Grid>
            <Grid item lg={4} sm={4} xs={0}>
                <RelatedVideos id={videoId.id} />
            </Grid>
        </Grid>
    );
}