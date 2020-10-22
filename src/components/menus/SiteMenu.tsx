import React from 'react';
import {useTranslation} from "react-i18next";

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
  return (
    <div className="site_menu">
      {getMenuOptions(t).map((page, idx) => (
        <h3 key={idx}>{page}</h3>
      ))}
    </div>
  );
}

export default SiteMenu;
