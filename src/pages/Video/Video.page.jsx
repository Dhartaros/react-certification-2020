import React, { useRef } from 'react';
import styled from 'styled-components';
import VideoDetails from '../../components/Video/VideoDetails.component';

const VideoContainer = styled.section`
  width: 100%;
`;

function VideoPage() {
  const sectionRef = useRef(null);

  return (
    <VideoContainer ref={sectionRef}>
      <VideoDetails />
    </VideoContainer>
  );
}

export default VideoPage;
