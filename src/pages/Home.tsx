import React, { useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import getSiteConfig from '../api/adminApi';

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

const showErrorToast = (t: (trans: string) => string) => {
  toast.error(
    <CustomToast
      headerText={t('home.loadError.message')}
      link={{
        route: '/',
        text: t('home.loadError.linkText'),
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
    loadFetchedContent,
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
    getSiteConfig().then((res) => {
      const { status } = res;
      if (status === 'success') {
        loadFetchedContent(res);
      } else {
        showErrorToast(t);
      }
    });
  }, []);

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
