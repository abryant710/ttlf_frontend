import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { Context as AppContext } from '../../context/AppContext';

import SocialIcons from '../SocialIcons';

function Footer() {
  const { t } = useTranslation('common');
  const {
    state: { showPlayer, showMenu },
  } = useContext(AppContext);
  const strobe = showPlayer && !showMenu ? 'strobeUpFast' : '';
  return (
    <footer className={`footer ${strobe}`}>
      <div className="footer__anchor">
        <h3 className="footer__title">{t('home.title')}</h3>
        <SocialIcons className="footer__icons" size="3rem" color="white" />
        <p className="footer__attribution">
          &#169;
          {t('footer.attribution')}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
