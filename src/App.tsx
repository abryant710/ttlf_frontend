import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import DJProfiles from './pages/DJProfiles';
import Videos from './pages/Videos';
import Schedule from './pages/Schedule';
import Live from './pages/Live';
import Header from './components/nav/Header';
import Footer from './components/nav/Footer';
import SiteMenu from './components/menus/SiteMenu';
import BackToTop from './components/BackToTop';
import './sass/main.sass';

function App() {
  return (
    <Router>
      <Header />
      <SiteMenu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/bios" exact component={DJProfiles} />
        <Route path="/videos" exact component={Videos} />
        <Route path="/schedule" exact component={Schedule} />
        <Route path="/live" exact component={Live} />
        <Redirect to="/" />
      </Switch>
      <Footer />
      <BackToTop />
    </Router>
  );
}

export default App;
