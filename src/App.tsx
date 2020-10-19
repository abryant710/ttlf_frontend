import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import TopNav from './components/nav/TopNav';
import Footer from './components/nav/Footer';
import './sass/main.sass';
 
function App() {
  return (
    <Router>
      <TopNav />
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Footer />
    </Router>
  );
}

export default App;
