import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import Picture from '../Picture';

import { Context as AppContext } from '../../context/AppContext';

type menuOptionData = {
  name: string;
  route: string;
};

function getMenuOptions(t: Function): Array<menuOptionData> {
  return [
    { name: t('menu.liveStream'), route: '/live' },
    { name: t('menu.videos'), route: '/videos' },
    { name: t('menu.djProfiles'), route: '/bios' },
    { name: t('menu.liveSchedule'), route: '/schedule' },
  ];
}

function transitionMenu(lowest: number, direction: string, numOptions: number): number {
  if (direction === 'up') {
    return lowest - 1 < 0 ? numOptions - 1 : lowest - 1;
  }
  return lowest + 1 >= numOptions ? 0 : lowest + 1;
}

function getSelectedMenuOptions(t: Function, lowest: number, options: Array<menuOptionData>): Array<menuOptionData> {
  let newMiddle = lowest + 1;
  let newHighest = lowest + 2;
  if (newHighest === options.length) {
    newMiddle = options.length - 1;
    newHighest = 0;
  } else if (newHighest === options.length + 1) {
    newMiddle = 0;
    newHighest = 1;
  }
  return [options[lowest], options[newMiddle], options[newHighest]];
}

function SiteMenu() {
  const { t } = useTranslation('common');
  const options = getMenuOptions(t);
  const {
    state: { showMenu },
    toggleMenu,
    minimisePlayer,
    showBackButton,
  } = useContext(AppContext);

  const history = useHistory();
  function handleClick(route: string): void {
    minimisePlayer();
    toggleMenu();
    showBackButton();
    window.scrollTo(0, 0);
    history.push(route);
  }

  const [lowestSelected, setLowestSelected] = useState(0);
  const [hasAnimation, setAnimation] = useState(true);

  const selectedMenuOptions = getSelectedMenuOptions(t, lowestSelected, options);

  return (
    <div className={`site_menu site_menu--${showMenu ? 'open' : 'closed'}`}>
      {options.length > 3 && (
        <div className="site_menu__chevron">
          <BsChevronUp
            onClick={() => {
              setAnimation(false);
              setTimeout(() => setAnimation(true), 100);
              setLowestSelected(transitionMenu(lowestSelected, 'up', options.length));
            }}
          />
        </div>
      )}
      {selectedMenuOptions.map((page, idx) => {
        const { name, route } = page;
        return (
          <div className="site_menu__button" key={`menu_option_${name}`} onClick={() => handleClick(route)}>
            <Picture
              className={`vinyl_icon vinyl_icon-1 vinyl_icon--${idx % 2 === 0 ? 'fast' : 'slow'}`}
              imageUrl="/images/transparent/ttlf-vinyl-record.png"
              alt="vinyl"
              small
            />
            <h2 className={hasAnimation ? `bounceIn${idx + 1}` : ''}>{name}</h2>
            <Picture
              className={`vinyl_icon vinyl_icon-2 vinyl_icon--${idx % 2 === 0 ? 'fast' : 'slow'}`}
              imageUrl="/images/transparent/ttlf-vinyl-record.png"
              alt="vinyl"
              small
            />
          </div>
        );
      })}
      {options.length > 3 && (
        <div className="site_menu__chevron">
          <BsChevronDown
            onClick={() => {
              setAnimation(false);
              setTimeout(() => setAnimation(true), 100);
              setLowestSelected(transitionMenu(lowestSelected, 'down', options.length));
            }}
          />
        </div>
      )}
    </div>
  );
}

export default SiteMenu;
