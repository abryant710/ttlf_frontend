import React from 'react';
import {useTranslation} from "react-i18next";

import Loader from '../components/Loader';

function Home() {
  const {t} = useTranslation('common');
  return (
    <div className="home">
      <Loader widthClass="image-width-small" imageUrl={"images/transparent/ttlf_0013.png"} />
    </div>
  );
}

export default Home;
