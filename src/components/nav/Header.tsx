import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';

import SocialIcons from '../../components/SocialIcons';

function Header() {
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
        <div className="header__burger center-items">
          <GiHamburgerMenu
            className="header__burger-icon pointer"
            size="20px"
            color="white"
          />
        </div>
      </div>
    </header>
  )
}

export default Header;