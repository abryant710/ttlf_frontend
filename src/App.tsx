import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  // RouteComponentProps
} from 'react-router-dom';

import Home from './pages/Home';
import TopNav from './components/nav/TopNav';
import Footer from './components/nav/Footer';
import './sass/main.sass';

// type TParams = { id: string };

// function Product({ match }: RouteComponentProps<TParams>) {
//   return <h2>This is a page for product with ID: {match.params.id} </h2>;
// }
 
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
