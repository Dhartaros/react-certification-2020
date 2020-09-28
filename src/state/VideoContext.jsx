import React from 'react';

const VideoContext = React.createContext({
    videos: [],
    currentVideo: {},
    setCurrentVideo: () => {}
});

export default VideoContext;