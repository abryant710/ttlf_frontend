import React from 'react';
import {useTranslation} from "react-i18next";

import Splash from '../components/Splash';

function Home() {
  // const {t} = useTranslation('common');
  return (
    <div className="home">
      <Splash imageUrl={"images/transparent/ttlf_0001.png"} />
      {/* <h1 className="home__title">{t('home.title')}</h1> */}
    </div>
  );
}

export default Home;
