import React from 'react';
import Video from './Video.component';
import Grid from '@material-ui/core/Grid';

export default function VideoList() {
    const description = "This is the title description. After certain characters limit it will start a new line.";
    return (
        <Grid container spacing={0}>
            <Grid item lg={2} sm={2} xs={2} />
            <Grid item container spacing={2} lg={8} sm={8} xs={8}>
                <Video id="nmXMgqjQzls" title="Title video" description={description} thumbnail="" />
                <Video id="nmXMgqjQzls" title="Title video" description={description} thumbnail="" />
                <Video id="nmXMgqjQzls" title="Title video" description={description} thumbnail="" />
                <Video id="nmXMgqjQzls" title="Title video" description={description} thumbnail="" />
                <Video id="nmXMgqjQzls" title="Title video" description={description} thumbnail="" />
            </Grid>
            <Grid item lg={2} sm={2} xs={2} />
        </Grid>
    );
}