import React, { useState } from 'react';
import videos from '../../videos';

const VideoContext = React.createContext({});

export const useVideo = () => {
    const contextValue = React.useContext(VideoContext);
    if (!contextValue) {
      throw Error("Video context not found; wrap your App with <VideoProvider>");
    }

    return contextValue;
};

const VideoProvider = ({ children }) => {
    const [videoList, setVideoList] = useState(videos);
  
    const contextValue = {
        videoList,
        setVideoList
    };
  
    return (
        <VideoContext.Provider value={contextValue}>{children}</VideoContext.Provider>
    );
};

export default VideoProvider;