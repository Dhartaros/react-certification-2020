import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import FavoritesPage from '../../pages/Favorites';
import VideoPage from '../../pages/Video';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Private from '../Private';
import Layout from '../Layout';
import Navbar from '../Navbar';
import VideoContext from '../../state/VideoContext';
import videos from '../../videos';
import SearchContext from '../../state/SearchContext';

function App() {
  const [videoList, setVideoList] = useState(videos);
  const [currentVideo, setCurrentVideo] = useState(videos);
  const [query, setQuery] = useState('wizeline');

  return (
    <VideoContext.Provider
      value={{ currentVideo, videoList, setCurrentVideo, setVideoList }}
    >
      <SearchContext.Provider value={{ query, setQuery }}>
        <BrowserRouter>
          <AuthProvider>
            <Navbar />
            <Layout>
              <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/video/:id" component={VideoPage} />
                <Route path="/login" component={LoginPage} exact />
                <Private path="/favorites" component={FavoritesPage} exact />
                <Route path="*" component={NotFound} />
              </Switch>
            </Layout>
          </AuthProvider>
        </BrowserRouter>
      </SearchContext.Provider>
    </VideoContext.Provider>
  );
}

export default App;
