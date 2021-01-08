import React, { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { Context as ContentContext } from '../context/ContentContext';

import Title from '../components/Title';
import Loader from '../components/Loader';
import Button from '../components/Button';

const largeRes = [1280, 720];
const mediumRes = [640, 360];
const smallRes = [320, 180];

function Live() {
  const { t } = useTranslation('common');
  const {
    state: { liveNow, currentLiveDj },
  } = useContext(ContentContext);

  const [width, setWidth] = useState(window.innerWidth);
  const [selectedSize, setSelectedSize] = useState('m');
  const [frameRefreshed, refreshFrame] = useState(false);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    if (width <= largeRes[0] && selectedSize === 'l') {
      setSelectedSize('m');
    }
    if (width <= mediumRes[0] && selectedSize === 'm') {
      setSelectedSize('s');
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width, selectedSize]);

  const getWidthOrHeight = (param: string): string => {
    const [lw, lh] = largeRes;
    if (width > lw && selectedSize === 'l') {
      return param === 'width' ? lw.toString() : lh.toString();
    }
    const [mw, mh] = mediumRes;
    if (width > mw && selectedSize === 'm') {
      return param === 'width' ? mw.toString() : mh.toString();
    }
    const [sw, sh] = smallRes;
    return param === 'width' ? sw.toString() : sh.toString();
  };

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
