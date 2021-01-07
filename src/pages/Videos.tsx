import React, { useContext, useState, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import { Context as ContentContext } from '../context/ContentContext';
import { Context as AppContext } from '../context/AppContext';

import { Media } from '../types';
import Title from '../components/Title';
import Loader from '../components/Loader';

const PlayerComp = lazy(() => import('react-player'));

function Videos() {
  const { t } = useTranslation('common');
  const {
    state: { showPlayer },
    turnPlayerOff,
  } = useContext(AppContext);
  const {
    state: { contentLoaded, youTubeVideoPrefix, youTubeVideos },
  } = useContext(ContentContext);

  const [videoPlaying, changeVideoPlaying] = useState(-1);

  return (
    <div className="videos page-min-height">
      <Title text={t('videos.title')} />
      {contentLoaded &&
        youTubeVideos.map((video: Media, idx: number) => {
          const { title, url } = video;
          return (
            <div className="videos__video" key={title}>
              <h2 className="videos__video--title">{title}</h2>
              <div className="videos__video--player">
                <Suspense fallback={<Loader showSpinner withClasses={['loadingAnimation', 'margin-top-medium']} />}>
                  <PlayerComp
                    url={`${youTubeVideoPrefix}${url}`}
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
                    onPlay={() => {
                      turnPlayerOff(true);
                      changeVideoPlaying(idx);
                    }}
                    playing={!showPlayer && videoPlaying === idx}
                  />
                </Suspense>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Videos;
