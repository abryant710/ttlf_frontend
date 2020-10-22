import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import { Provider as AppProvider } from './context/AppContext';
import en from "./i18n/en.json";

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
        en: {
          common: en
        }
    },
});

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
