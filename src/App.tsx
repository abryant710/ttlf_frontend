import React, { useContext, useEffect, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// NOTE: Only used if backend active
// import getSiteConfig from './api/adminApi';
import staticJSON from './api/static.json';
import { Context as ContentContext } from './context/ContentContext';

import Loader from './components/Loader';
import Header from './components/nav/Header';
import Footer from './components/nav/Footer';
import SiteMenu from './components/menus/SiteMenu';
import './sass/main.sass';

const Home = lazy(() => import('./pages/Home'));
const DJProfiles = lazy(() => import('./pages/DJProfiles'));
const Videos = lazy(() => import('./pages/Videos'));
const LiveSchedule = lazy(() => import('./pages/LiveSchedule'));
const Live = lazy(() => import('./pages/Live'));
const Toast = lazy(() => import('./components/CustomToast'));
const ToTop = lazy(() => import('./components/BackToTop'));

const showErrorToast = (t: (trans: string) => string) => {
  toast.error(
    <Suspense fallback={<div />}>
      <Toast
        headerText={t('home.loadError.message')}
        link={{
          route: '/',
          text: t('home.loadError.linkText'),
        }}
      />
    </Suspense>,
  );
};

function App() {
  const { t } = useTranslation('common');
  const { loadFetchedContent } = useContext(ContentContext);

  useEffect(() => {
    const loadApp = async () => {
      // NOTE: Only used if backend active
      // const res = await getSiteConfig();
      // const { status } = res;
      const { status } = staticJSON;
      if (status === 'success') {
        // NOTE: Only used if backend active
        // loadFetchedContent(res);
        loadFetchedContent(staticJSON);
      } else {
        showErrorToast(t);
      }
    };
    loadApp();
  }, []);

  return (
    <Router>
      <Header />
      <SiteMenu />
      <Switch>
        <Suspense
          fallback={
            <Loader showSpinner withClasses={['loadingAnimation', 'margin-top-medium', 'margin-bottom-medium']} />
          }
        >
          <Route path="/bios" exact component={DJProfiles} />
          <Route path="/videos" exact component={Videos} />
          <Route path="/schedule" exact component={LiveSchedule} />
          <Route path="/live" exact component={Live} />
          <Route path="/" exact component={Home} />
        </Suspense>
        <Redirect to="/" />
      </Switch>
      <Footer />
      <Suspense fallback={<div />}>
        <ToTop />
      </Suspense>
      <ToastContainer autoClose={10000} hideProgressBar draggable={false} transition={Zoom} />
    </Router>
  );
}

export default App;
