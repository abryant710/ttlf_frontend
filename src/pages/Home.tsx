import React, { useEffect, useContext, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Context as ContentContext } from '../context/ContentContext';
import { Context as AppContext } from '../context/AppContext';

const Toast = lazy(() => import('../components/CustomToast'));

const showEventToast = (t: (trans: string) => string) => {
  toast.info(
    <Suspense fallback={<div />}>
      <Toast
        headerText={t('home.events.message')}
        link={{
          route: '/schedule',
          text: t('home.events.linkText'),
        }}
      />
    </Suspense>,
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
    <div className="home page-min-height">
      <img src="/videos/ttlf_video_short.gif" alt="TTLF" className="home-img" />
    </div>
  );
}

export default Home;
