import React, {useState, useContext} from 'react';
import {useTranslation} from "react-i18next";
import {BsChevronDown, BsChevronUp} from "react-icons/bs";

import { Context as AppContext } from '../../context/AppContext';

const getMenuOptions = function (t: Function): Array<string> {
  return [
    t('menu.liveStream'),
    t('menu.liveSchedule'),
    t('menu.djProfiles'),
    t('menu.videos'),
    t('menu.mailingList'),
  ];
};

const transitionMenu = function (lowest: number, direction: string, numOptions: number): number {
  if (direction === "up") {
    return lowest - 1 < 0 ? numOptions - 1 : lowest - 1;
  } else {
    return lowest + 1 >= numOptions ? 0 : lowest + 1;
  }
};

const getSelectedMenuOptions = function (t: Function, lowest: number, options: Array<string>): Array<string> {
  let newMiddle = lowest + 1;
  let newHighest = lowest + 2;
  if (newHighest === options.length) {
    newMiddle = options.length - 1;
    newHighest = 0;
  } else if (newHighest === options.length + 1) {
    newMiddle = 0;
    newHighest = 1;
  }
  return [
    options[lowest], options[newMiddle], options[newHighest]
  ];
};

function SiteMenu() {
  const {t} = useTranslation('common');
  const options = getMenuOptions(t);
  const {
    state: {showMenu}
  } = useContext(AppContext);
  const [lowestSelected, setLowestSelected] = useState(0);
  const [hasAnimation, setAnimation] = useState(true);
  return (
    <div className={`site_menu site_menu--${showMenu ? "open" : "closed"}`}>
      <BsChevronUp onClick={() => {
        setAnimation(false);
        setTimeout(() => setAnimation(true), 100);
        setLowestSelected(transitionMenu(lowestSelected, "down", options.length))
      }} />
      {getSelectedMenuOptions(t, lowestSelected, options).map((page, idx) => (
        <div className="site_menu__button" key={`menu_option_${idx}`}>
          <img className="vinyl_icon vinyl_icon-1" src="/images/transparent/ttlf-vinyl-record.png" alt="vinyl" />
          <h2 className={hasAnimation ? `bounceIn${idx + 1}` : ""}>{page}</h2>
          <img className="vinyl_icon vinyl_icon-2" src="/images/transparent/ttlf-vinyl-record.png" alt="vinyl" />
        </div>
      ))}
      <BsChevronDown onClick={() => {
        setAnimation(false);
        setTimeout(() => setAnimation(true), 300);
        setLowestSelected(transitionMenu(lowestSelected, "up", options.length))
      }} />
    </div>
  );
}

export default SiteMenu;
