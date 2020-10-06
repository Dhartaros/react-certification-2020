import React from 'react';
/* Router */
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Private from '../Private';
import Layout from '../Layout';
import Navbar from '../Navbar';
/* Pages */
import HomePage from '../../pages/Home';
import FavoritesPage from '../../pages/Favorites';
import VideoPage from '../../pages/Video';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
/* Providers */
import AuthProvider from '../../providers/Auth';
import VideoProvider from '../../providers/Video';
import SearchProvider from '../../providers/Search';
import FavoriteProvider from '../../utils/store/FavoriteProvider'

function App() {
  return (
    <VideoProvider>
      <SearchProvider>
        <BrowserRouter>
          <AuthProvider>
            <Navbar />
            <Layout>
              <FavoriteProvider>
                <Switch>
                  <Route path="/" component={HomePage} exact />
                  <Route path="/video/:id" component={VideoPage} />
                  <Route path="/login" component={LoginPage} exact />
                  <Private path="/favorites" component={FavoritesPage} exact />
                  <Route path="*" component={NotFound} />
                </Switch>
              </FavoriteProvider>
            </Layout>
          </AuthProvider>
        </BrowserRouter>
      </SearchProvider>
    </VideoProvider>
  );
}

export default App;
