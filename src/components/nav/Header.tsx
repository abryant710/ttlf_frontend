import React, { useContext, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { useTranslation } from 'react-i18next';
import { GiHamburgerMenu, GiSpeakerOff } from 'react-icons/gi';
import { CgCloseR } from 'react-icons/cg';
import { BsSpeaker } from 'react-icons/bs';
import { SiFacebooklive } from 'react-icons/si';
import { RiSlideshow3Fill } from 'react-icons/ri';
import { BiMinus } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';

import { Context as AppContext } from '../../context/AppContext';
import SocialIcons from '../SocialIcons';
import Player from '../Player';

function Header() {
  const {
    state: { showMenu, showPlayer, playerMinimised, backButtonShown },
    toggleMenu,
    togglePlayer,
    toggleMinimisePlayer,
    hideMenu,
    minimisePlayer,
  } = useContext(AppContext);

  useEffect(() => {
    ReactTooltip.rebuild();
  });

  const strobe = showPlayer && !showMenu ? 'strobeDownFast' : '';
  const history = useHistory();

  const handleBackClick = () => {
    window.scrollTo(0, 0);
    hideMenu();
    history.goBack();
  };

  const handleGoLiveClick = () => {
    window.scrollTo(0, 0);
    hideMenu();
    minimisePlayer();
    history.push('/live');
  };

  const { t } = useTranslation('common');

  const getBackButton = (btnShown: boolean) => {
    if (btnShown) {
      return (
        <div onClick={handleBackClick} className="header__back-icon">
          &larr; Back
        </div>
      );
    }
    return <SocialIcons className="header__icons" size="20px" color="white" />;
  };

  const showBurgerOption = (showBurger: boolean) => {
    if (showBurger) {
      return (
        <CgCloseR className="header__menu-icon pointer rotateY360" size="20px" color="white" onClick={toggleMenu} />
      );
    }
    return (
      <GiHamburgerMenu
        className="header__menu-icon pointer rotateX360"
        size="20px"
        color="white"
        onClick={toggleMenu}
        data-tip={t('header.icons.openMenu')}
      />
    );
  };

  const showPlayerWindow = (revealPlayer: boolean) => {
    if (revealPlayer) {
      return (
        <GiSpeakerOff
          className="header__menu-icon pointer rotateX360"
          size="20px"
          color="white"
          onClick={togglePlayer}
          data-tip={t('header.icons.killMusic')}
        />
      );
    }
    return (
      <BsSpeaker
        className="header__menu-icon pointer rotateZ360"
        size="20px"
        color="white"
        onClick={togglePlayer}
        data-tip={t('header.icons.openPlayer')}
      />
    );
  };

  return (
    <header className={`header ${strobe}`}>
      <div className="header__anchor">
        <div className="header__social-icons">{getBackButton(backButtonShown)}</div>
        <div className="header__player-minimised">
          {playerMinimised && showPlayer && (
            <RiSlideshow3Fill
              className="header__menu-icon pointer rotateY720"
              size="20px"
              color="white"
              onClick={toggleMinimisePlayer}
              data-tip={t('header.icons.controlMusic')}
            />
          )}
          {!playerMinimised && showPlayer && (
            <BiMinus
              className="header__menu-icon pointer rotateX360"
              size="20px"
              color="white"
              onClick={toggleMinimisePlayer}
              data-tip={t('header.icons.minimisePlayer')}
            />
          )}
        </div>
        <div className="header__player">{showPlayerWindow(showPlayer)}</div>
        <div className="header__watch-live">
          <SiFacebooklive
            className="header__menu-icon pointer rotateY720"
            size="20px"
            color="white"
            onClick={handleGoLiveClick}
            data-tip={t('header.icons.watchLive')}
          />
        </div>
        <div className="header__burger">{showBurgerOption(showMenu)}</div>
      </div>
      {showPlayer && <Player />}
      <ReactTooltip disable={!!showMenu} />
    </header>
  );
}

export default Header;
