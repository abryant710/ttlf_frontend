import React, { useEffect, useContext } from 'react';
import { toast } from 'react-toastify';

import { Context as AppContext } from '../context/AppContext';

import Loader from '../components/Loader';
import CustomToast from '../components/CustomToast';

// TODO: possibly add this to context as initial page load could be elsewhere
let initalLoad = true;

function Home() {
  const {
    state: { backButtonShown, showPlayer },
    hideBackButton,
    turnPlayerOff,
  } = useContext(AppContext);

  useEffect(() => {
    if (backButtonShown) {
      hideBackButton();
    }
    if (!showPlayer && initalLoad) {
      turnPlayerOff(false);
      initalLoad = false;
      toast.info(
        <CustomToast
          headerText="We have an upcoming event!"
          link={{
            route: '/schedule',
            text: 'Click here to find out more',
          }}
        />,
      );
    }
  });

  return (
    <div className="home margin-bottom-footer">
      <Loader withClasses={['loadingAnimation', 'bounceDown']} imageUrl="images/transparent/ttlf_0013.png" isOverlay />
    </div>
  );
}

export default Home;
