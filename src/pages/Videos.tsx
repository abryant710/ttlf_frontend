import React, { useContext, useState } from 'react';
import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';

import { Context as AppContext } from '../context/AppContext';

import Title from '../components/Title';
import Loader from '../components/Loader';
import { urlPrefix, videos } from '../config/youTubeVideos';

function Videos() {
  const { t } = useTranslation('common');
  const {
    state: { showPlayer },
    turnPlayerOff,
  } = useContext(AppContext);
  const [videoPlaying, changeVideoPlaying] = useState(-1);
  const loadStates: { [key: string]: boolean } = {};
  videos.forEach((video, idx) => {
    loadStates[`video_${idx}`] = false;
    return null;
  });
  const [videosLoaded, setLoaded] = useState(loadStates);
  return (
    <div className="videos margin-bottom-footer">
      <Title text={t('videos.title')} />
      {videos.map((video, idx) => {
        const { title, url } = video;
        return (
          <div className="videos__video" key={title}>
            <h2 className="videos__video--title">{title}</h2>
            {!videosLoaded[`video_${idx}`] && (
              <Loader showSpinner withClasses={['loadingAnimation', 'margin-top-medium']} />
            )}
            <div className="videos__video--player">
              <ReactPlayer
                url={`${urlPrefix}${url}`}
                width="100%"
                height="100%"
                config={{
                  youtube: {
                    playerVars: {
                      showinfo: 1,
                      controls: 1,
                    },
                  },
                }}
                onReady={() => {
                  setLoaded({ ...videosLoaded, [`video_${idx}`]: true });
                }}
                onPlay={() => {
                  turnPlayerOff(true);
                  changeVideoPlaying(idx);
                }}
                playing={!showPlayer && videoPlaying === idx}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Videos;
