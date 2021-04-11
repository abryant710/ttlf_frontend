import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaSoundcloud, FaYoutube, FaFacebook, FaTwitch } from 'react-icons/fa';

import externalLinks from '../config/externalLinks';

const soundcloudColor = '#ff5604';
const youTubeColor = '#cc0000';
const facebookColor = '#1195f5';
const twitchColor = '#9147ff';

type SocialIconsProps = {
  className: string;
  size: string;
};

function SocialIcons({ className, size }: SocialIconsProps) {
  const { t } = useTranslation('common');
  return (
    <div className={className}>
      <a
        aria-label="Soundcloud"
        target="_blank"
        className="center-items hover-rotate"
        rel="noopener noreferrer"
        href={externalLinks.soundcloud}
        data-tip={t('externalLinks.soundcloud')}
      >
        <FaSoundcloud color={soundcloudColor} size={size} className="social" />
      </a>
      <a
        aria-label="YouTube"
        target="_blank"
        className="center-items hover-rotate"
        rel="noopener noreferrer"
        href={externalLinks.youtube}
        data-tip={t('externalLinks.youtube')}
      >
        <FaYoutube color={youTubeColor} size={size} className="social" />
      </a>
      <a
        aria-label="Facebook"
        target="_blank"
        className="center-items hover-rotate"
        rel="noopener noreferrer"
        href={externalLinks.facebook}
        data-tip={t('externalLinks.facebook')}
      >
        <FaFacebook color={facebookColor} size={size} className="social" />
      </a>
      <a
        aria-label="Twitch"
        target="_blank"
        className="center-items hover-rotate"
        rel="noopener noreferrer"
        href={externalLinks.twitch}
        data-tip={t('externalLinks.twitch')}
      >
        <FaTwitch color={twitchColor} size={size} className="social" />
      </a>
    </div>
  );
}

export default SocialIcons;
