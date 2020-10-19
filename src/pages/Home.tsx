import React from 'react';
import {useTranslation} from "react-i18next";

import { links } from '../config/links';

function Home() {
  const {t, i18n} = useTranslation('common');
  return (
    <div className="home">
      <h1 className="home__title">{t('home.title')}</h1>
      <h5 className="home__message">The website is currently under construction and we will have more content soon!</h5>
      <img className="home__image" src="images/transparent/ttlf_0001.png" alt="TTFL" />
      <h3 className="home__link">
        <a href={links.facebook} className="fb-link">Check out our Facebook page</a>
      </h3>
    </div>
  );
}

export default Home;
