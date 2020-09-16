import React, { useRef } from 'react';
import VideoList from '../../components/Video/VideoList.component';

import './Favorites.styles.css';

function FavoritesPage() {
  const sectionRef = useRef(null);

  return (
    <section className="favorites" ref={sectionRef}>
      <VideoList />
    </section>
  );
}

export default FavoritesPage;
