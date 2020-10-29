import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Bios from './pages/Bios';
import Videos from './pages/Videos';
import Schedule from './pages/Schedule';
import Header from './components/nav/Header';
import Footer from './components/nav/Footer';
import SiteMenu from './components/menus/SiteMenu';
import './sass/main.sass';

function App() {
  return (
    <Router>
      <Header />
      <SiteMenu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/bios" exact component={Bios} />
        <Route path="/videos" exact component={Videos} />
        <Route path="/schedule" exact component={Schedule} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
