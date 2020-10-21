import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgCloseR} from 'react-icons/cg';

import SocialIcons from '../../components/SocialIcons';

// TODO: get provider to show menu when switched on/off

function Header() {
  const [menuOpen, toggleMenu] = useState(false);
  return (
    <header className="header">
      <div className="header__anchor">
        <div className="header__social-icons">
          <SocialIcons
            className="header__icons"
            size="20px"
            color="white"
          />
        </div>
        <div className="header__burger">
          {!menuOpen ? (
            <GiHamburgerMenu
              className="header__menu-icon pointer rotateX360"
              size="20px"
              color="white"
              onClick={() => toggleMenu(!menuOpen)}
            />
          ) : (
            <CgCloseR
              className="header__menu-icon pointer rotateY360"
              size="20px"
              color="white"
              onClick={() => toggleMenu(!menuOpen)}
            />
          )}
        </div>
      </div>
    </header>
  )
}

export default Header;