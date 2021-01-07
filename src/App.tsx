import React, { useContext, useEffect, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import getSiteConfig from './api/adminApi';
import { Context as ContentContext } from './context/ContentContext';

import Home from './pages/Home';
import DJProfiles from './pages/DJProfiles';
import Videos from './pages/Videos';
import Schedule from './pages/Schedule';
import Live from './pages/Live';
import Header from './components/nav/Header';
import Footer from './components/nav/Footer';
import SiteMenu from './components/menus/SiteMenu';
import './sass/main.sass';

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
      const res = await getSiteConfig();
      const { status } = res;
      if (status === 'success') {
        loadFetchedContent(res);
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
        <Route path="/bios" exact component={DJProfiles} />
        <Route path="/videos" exact component={Videos} />
        <Route path="/schedule" exact component={Schedule} />
        <Route path="/live" exact component={Live} />
        <Route path="/" exact component={Home} />
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
