import React, { useEffect, useContext } from 'react';

import { Context as AppContext } from '../context/AppContext';

import Loader from '../components/Loader';

function Home() {
  const {
    state: { backButtonShown },
    hideBackButton,
  } = useContext(AppContext);

  useEffect(() => {
    if (backButtonShown) {
      hideBackButton();
    }
  });

  return (
    <div className="home margin-bottom-footer">
      <Loader withClasses={['loadingAnimation', 'bounceDown']} imageUrl="images/transparent/ttlf_0013.png" isOverlay />
    </div>
  );
}

export default Home;
