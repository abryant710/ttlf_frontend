import React, {useContext} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgCloseR} from 'react-icons/cg';

import { Context as AppContext } from '../../context/AppContext';
import SocialIcons from '../../components/SocialIcons';

function Header() {
  const { 
    state: {showMenu},
    toggleMenu
  } = useContext(AppContext);
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
    </header>
  )
}

export default Header;