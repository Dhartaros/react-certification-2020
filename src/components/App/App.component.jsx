import React from 'react';
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

function App() {
  return (
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
  );
}

export default App;
