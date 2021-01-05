import React, { useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Context as ContentContext } from '../context/ContentContext';
import { Context as AppContext } from '../context/AppContext';

import Loader from '../components/Loader';
import CustomToast from '../components/CustomToast';

const showEventToast = (t: (trans: string) => string) => {
  toast.info(
    <CustomToast
      headerText={t('home.events.message')}
      link={{
        route: '/schedule',
        text: t('home.events.linkText'),
      }}
    />,
  );
};

function Home() {
  const { t } = useTranslation('common');
  const history = useHistory();
  const {
    state: { backButtonShown, showPlayer },
    hideBackButton,
    turnPlayerOff,
  } = useContext(AppContext);
  const {
    state: { liveNow, upcomingEvent },
  } = useContext(ContentContext);

  useEffect(() => {
    if (liveNow) {
      history.push('/live');
      turnPlayerOff(true);
    } else if (upcomingEvent) {
      showEventToast(t);
    } else if (!showPlayer) {
      turnPlayerOff(false);
    }
  }, [liveNow, upcomingEvent]);

  useEffect(() => {
    if (backButtonShown) {
      hideBackButton();
    }
  }, [backButtonShown, hideBackButton]);

  return (
    <div className="home margin-bottom-footer">
      <Loader withClasses={['loadingAnimation', 'bounceDown']} imageUrl="images/transparent/ttlf_0013.png" isOverlay />
    </div>
  );
}

export default Home;
