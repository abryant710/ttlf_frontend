import React from 'react';
import { useTranslation } from 'react-i18next';

import Title from '../components/Title';

function Live() {
  const { t } = useTranslation('common');
  let [width, height] = ['640', '360'];
  if (window.innerWidth < 640) {
    [width, height] = ['320', '180'];
  }
  return (
    <div className="live margin-bottom-footer">
      <Title text={t('live.title')} />
      <div className="live__video">
        <div className="live__video--player">
          <iframe
            title="ttlf_live"
            src="https://embed.restream.io/player/index.html?token=c0ae99a3e8dd7d054296b3e43ac3dd50"
            width={`${width}px`}
            height={`${height}px`}
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
}

export default Live;
