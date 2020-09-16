import React, { useRef } from 'react';
import VideoDetails from '../../components/Video/VideoDetails.component'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    width: '100%',
  },
}));

function VideoPage() {
  const classes = useStyles();
  const sectionRef = useRef(null);

  return (
    <section className={classes.videoContainer} ref={sectionRef}>
      <VideoDetails />
    </section>
  );
}

export default VideoPage;