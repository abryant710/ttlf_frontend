import React, {useContext} from 'react';
import {useTranslation} from "react-i18next";

import { Context as AppContext } from '../../context/AppContext';

const getMenuOptions = function (t: Function): Array<string> {
  return [
    t('menu.djProfiles'),
    t('menu.liveSchedule'),
    t('menu.videos'),
    t('menu.mailingList'),
  ];
};

function SiteMenu() {
  const {t} = useTranslation('common');
  const { 
    state: {showMenu}
  } = useContext(AppContext);
  if (!showMenu) return null;
  return (
    <div className="site_menu">
      {getMenuOptions(t).map((page, idx) => (
        <h3 key={`menu_option_${idx}`}>{page}</h3>
      ))}
    </div>
  );
}

export default SiteMenu;
