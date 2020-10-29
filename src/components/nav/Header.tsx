import React, {useContext} from 'react';
import {GiHamburgerMenu, GiSpeakerOff} from 'react-icons/gi';
import {CgCloseR} from 'react-icons/cg';
import {BsSpeaker} from 'react-icons/bs';
import {RiSlideshow3Fill} from 'react-icons/ri';
import {BiMinus} from 'react-icons/bi';

import { Context as AppContext } from '../../context/AppContext';
import SocialIcons from '../../components/SocialIcons';
import Player from '../../components/Player';

function Header() {
  const { 
    state: {showMenu, showPlayer, playerMinimised},
    toggleMenu, togglePlayer, toggleMinimisePlayer
  } = useContext(AppContext);
  const strobe = showPlayer && !showMenu ? "strobeDownFast" : "";
  return (
    <header className={`header ${strobe}`}>
      <div className="header__anchor">
        <div className="header__social-icons">
          <SocialIcons
            className="header__icons"
            size="20px"
            color="white"
          />
        </div>
        <div className="header__player-minimised">
          {playerMinimised && showPlayer && (
            <RiSlideshow3Fill
              className="header__menu-icon pointer rotateY720"
              size="20px"
              color="white"
              onClick={toggleMinimisePlayer}
            />
          )}
          {!playerMinimised && showPlayer && (
            <BiMinus
              className="header__menu-icon pointer rotateX360"
              size="20px"
              color="white"
              onClick={toggleMinimisePlayer}
            />
          )}
        </div>
        <div className="header__player">
          {!showPlayer ? (
            <BsSpeaker
              className="header__menu-icon pointer rotateZ360"
              size="20px"
              color="white"
              onClick={togglePlayer}
            />
          ) : (
            <GiSpeakerOff
              className="header__menu-icon pointer rotateX360"
              size="20px"
              color="white"
              onClick={togglePlayer}
            />
          )}
        </div>
        <div className="header__burger">
          {!showMenu ? (
            <GiHamburgerMenu
              className="header__menu-icon pointer rotateX360"
              size="20px"
              color="white"
              onClick={toggleMenu}
            />
          ) : (
            <CgCloseR
              className="header__menu-icon pointer rotateY360"
              size="20px"
              color="white"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
      {showPlayer && <Player />}
    </header>
  )
}

export default Header;