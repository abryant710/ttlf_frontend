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
        <div className="header__burger">
          <GiHamburgerMenu
            className="header__burger-icon"
            size="20px"
            color="white"
          />
        </div>
      </div>
      {/* <div className="header__image">
      </div> */}
    </header>
  )
}

export default Header;