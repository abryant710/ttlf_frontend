import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Title from '../components/Title';
import Loader from '../components/Loader';

function Live() {
  const { t } = useTranslation('common');

  const [width, setWidth] = useState(window.innerWidth);
  const [frameRefreshed, refreshFrame] = useState(false);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const getWidthOrHeight = (param: string): string => {
    if (width > 1280) {
      return param === 'width' ? '1280' : '720';
    }
    if (width > 640) {
      return param === 'width' ? '640' : '360';
    }
    return param === 'width' ? '320' : '180';
  };

  const reloadIframeWidget = (): void => {
    refreshFrame(true);
    setTimeout(() => {
      refreshFrame(false);
    }, 2000);
  };

  return (
    <div className="live margin-bottom-footer">
      <Title text={t('live.title')} />
      <div className="live__video">
        <div className="live__video--player">
          <p className="live__video--player-refresh" onClick={reloadIframeWidget}>
            Refresh stream?
          </p>
          {!frameRefreshed ? (
            <iframe
              title="ttlf_live"
              src="https://embed.restream.io/player/index.html?token=c0ae99a3e8dd7d054296b3e43ac3dd50"
              width={`${getWidthOrHeight('width')}px`}
              height={`${getWidthOrHeight('height')}px`}
              frameBorder="0"
              allowFullScreen
            />
          ) : (
            <Loader showSpinner withClasses={['loadingAnimation', 'margin-top-medium', 'margin-bottom-medium']} />
          )}
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
