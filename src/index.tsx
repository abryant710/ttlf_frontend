import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import App from './App';

import { Provider as ContentProvider } from './context/ContentContext';
import { Provider as AppProvider } from './context/AppContext';
import en from './i18n/en.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: en,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ContentProvider>
      <AppProvider>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </AppProvider>
    </ContentProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
