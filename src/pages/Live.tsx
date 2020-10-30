import React from 'react';
import { useTranslation } from 'react-i18next';

const Live = () => {
  const { t } = useTranslation('common');
  const [width, height] = [640, 360];
  let factor = 1;
  if (window.innerWidth < 640) {
    factor = 0.5;
  }
  return (
    <div className="live margin-bottom-footer">
      <div className="live__video">
        <h2 className="live__video--title">{t('menu.liveStream')}</h2>
        <div className="live__video--player">
          <iframe
            title="ttlf_live"
            src="https://embed.restream.io/player/index.html?token=c0ae99a3e8dd7d054296b3e43ac3dd50"
            width={`${width * factor}px`}
            height={`${height * factor}px`}
            frameBorder="0"
            allowFullScreen
          />
          <p>
            Powered by
            <a href="https://restream.io"> Restream.io</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Live;
