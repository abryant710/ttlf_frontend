import React from 'react';
import './sass/main.sass';
import { links } from './config/links';

function App() {
  return (
    <div className="home">
      <h1 className="home__title">Trip the Light Fantastic</h1>
      <h5 className="home__message">The website is currently under construction and we will have more content soon!</h5>
      <img className="home__image" src="images/ttlf_0001.jpg" alt="TTFL" />
      <h3 className="home__link">
        <a href={links.facebook} className="fb-link">Check out our Facebook page</a>
      </h3>
    </div>
  );
}

export default App;
