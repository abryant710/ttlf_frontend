import React from 'react';
import {useTranslation} from "react-i18next";

import Loader from '../components/Loader';

function Home() {
  const {t} = useTranslation('common');
  return (
    <div className="home">
      {/* Should be common.loading */}
      <Loader message={t('common.constructionMessage')} imageUrl={"images/transparent/ttlf_0001.png"} />
    </div>
  );
}

export default Home;
