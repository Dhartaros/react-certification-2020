import React, { useRef } from 'react';
import styled from 'styled-components';
import VideoList from '../../components/Video/VideoList.component';

const Container = styled.section`
  text-align: center;
`;

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <Container ref={sectionRef}>
      <VideoList />
    </Container>
  );
}

export default HomePage;
