import React from 'react';
import {useTranslation} from "react-i18next";
import { FaSoundcloud, FaYoutube, FaFacebook, FaTwitch } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';

import {externalLinks} from '../config/externalLinks';

type SocialIconsProps = {
  className: string,
  size: string,
  color: string,
}

function SocialIcons({className, size, color}: SocialIconsProps) {
  const {t} = useTranslation('common');
  return (
    <div className={className}>
      <a
        target="_blank"
        className="center-items hover-rotate"
        rel="noopener noreferrer"
        href={externalLinks.soundcloud}
        data-tip={t('externalLinks.soundcloud')}
      >
        <FaSoundcloud
          color={color}
          size={size}
        />
      </a>
      <a
        target="_blank"
        className="center-items hover-rotate"
        rel="noopener noreferrer"
        href={externalLinks.youtube}
        data-tip={t('externalLinks.youtube')}
      >
        <FaYoutube
          color={color}
          size={size}
        />
      </a>
      <a
        target="_blank"
        className="center-items hover-rotate"
        rel="noopener noreferrer"
        href={externalLinks.facebook}
        data-tip={t('externalLinks.facebook')}
      >
        <FaFacebook
          color={color}
          size={size}
        />
      </a>
      <a
        target="_blank"
        className="center-items hover-rotate"
        rel="noopener noreferrer"
        href={externalLinks.twitch}
        data-tip={t('externalLinks.twitch')}
      >
        <FaTwitch
          color={color}
          size={size}
        />
      </a>
      <ReactTooltip />
    </div>
  );
}

export default SocialIcons;
