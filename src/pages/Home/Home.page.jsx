import React, { useRef } from 'react';
import VideoList from '../../components/Video/VideoList.component';

import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <VideoList />
    </section>
  );
}

export default HomePage;
