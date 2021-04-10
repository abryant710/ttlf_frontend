import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import useWindowWidths from '../hooks/useWindowWidths';
import { Context as ContentContext } from '../context/ContentContext';

import Title from '../components/Title';
import Loader from '../components/Loader';
import Button from '../components/Button';

function Live() {
  const { t } = useTranslation('common');
  const {
    state: { liveNow, currentLiveDj },
  } = useContext(ContentContext);

  const {
    getWidthOrHeight,
    setSelectedSize,
    selectedSize,
    width,
    resolutions: [largeRes, mediumRes],
  } = useWindowWidths();

  const [frameRefreshed, refreshFrame] = useState(false);

  const reloadIframeWidget = (): void => {
    refreshFrame(true);
    setTimeout(() => {
      refreshFrame(false);
    }, 2000);
  };

  const getRefreshedFrame = (refreshed: boolean) => {
    if (refreshed) {
      return <Loader showSpinner withClasses={['loadingAnimation', 'margin-top-medium', 'margin-bottom-medium']} />;
    }
    return (
      <div className="live__video--player-content">
        <iframe
          title="ttlf_live"
          src={`https://player.twitch.tv/?channel=ttlf001&parent=${window.location.hostname}&autoplay=true`}
          width={`${getWidthOrHeight('width')}px`}
          height={`${getWidthOrHeight('height')}px`}
          frameBorder="0"
          allowFullScreen
        />
        <iframe
          className="live__video--player-chat"
          title="ttlf_live_chat"
          frameBorder="0"
          scrolling="no"
          id="chat_embed"
          src={`https://www.twitch.tv/embed/ttlf001/chat?parent=${window.location.hostname}`}
          width={`${getWidthOrHeight('width')}px`}
          height={`${getWidthOrHeight('height')}px`}
        />
        <p>
          Powered by
          <a target="_blank" href="https://www.twitch.tv/" rel="noopener noreferrer">
            {' '}
            Twitch.tv
          </a>
        </p>
      </div>
    );
  };

  const vidClsStr = 'live__video--player-size-selected';

  return (
    <div className={`live min-height-${2 * +getWidthOrHeight('height')}`}>
      <Title text={t('live.title')} />
      {liveNow && (
        <div className="live-subtitle center-text w-80">
          <p>
            <span className="flash">{currentLiveDj}</span>
            {` ${t('live.liveNow')}`}
          </p>
        </div>
      )}
      {!liveNow && (
        <div className="live-subtitle center-text w-80">
          <p>{` ${t('live.notLiveNow')}`}</p>
        </div>
      )}
      <div className="live__video">
        <div className="live__video--player">
          <p className="live__video--player-refresh" onClick={reloadIframeWidget}>
            Refresh stream?
          </p>
          <div className="live__video--player-size">
            {width > mediumRes[0] && (
              <Button
                className={`live__video--player-size-s ${selectedSize === 's' ? vidClsStr : ''}`}
                onClick={() => setSelectedSize('s')}
                text={t('live.buttonSmall')}
              />
            )}
            {width > mediumRes[0] && (
              <Button
                className={`live__video--player-size-m ${selectedSize === 'm' ? vidClsStr : ''}`}
                onClick={() => setSelectedSize('m')}
                text={t('live.buttonMedium')}
              />
            )}
            {width > largeRes[0] && (
              <Button
                className={`live__video--player-size-l ${selectedSize === 'l' ? vidClsStr : ''}`}
                onClick={() => setSelectedSize('l')}
                text={t('live.buttonLarge')}
              />
            )}
          </div>
          {getRefreshedFrame(frameRefreshed)}
        </div>
      </div>
    </div>
  );
}

export default Live;
