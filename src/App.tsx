import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/nav/Header';
import Footer from './components/nav/Footer';
import './sass/main.sass';
 
function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Footer />
    </Router>
  );
}

export default App;
