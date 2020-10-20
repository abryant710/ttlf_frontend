import React from 'react';
import {useTranslation} from "react-i18next";

import SocialIcons from '../../components/SocialIcons';

function Footer() {
  const {t} = useTranslation('common');
  return (
    <footer className="footer">
      <div className="footer__title">
        {t('home.title')}
      </div>
      <SocialIcons
        className="footer__icons"
        size="3rem"
        color="white"
      />
      <div className="footer__attribution">
        &#169; {t('footer.attribution')}
      </div>
    </footer>
  )
}

export default Footer;