import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

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

const initialAppState = {
  menuVisible: false,
};
const AppStateContext = React.createContext(initialAppState);

ReactDOM.render(
  <React.StrictMode>
    <AppStateContext.Provider value={initialAppState}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </AppStateContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
