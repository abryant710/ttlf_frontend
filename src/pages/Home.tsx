import React, { useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { Context as AppContext } from '../context/AppContext';

import Loader from '../components/Loader';
import CustomToast from '../components/CustomToast';

// TODO: possibly add this to context as initial page load could be elsewhere
let initalLoad = true;

function Home() {
  const { t } = useTranslation('common');
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
          headerText={t('home.events.message')}
          link={{
            route: '/schedule',
            text: t('home.events.linkText'),
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
