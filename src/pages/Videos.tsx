import React, { useContext, useState } from 'react';
import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';
import { shuffle } from 'lodash';

import { Context as ContentContext } from '../context/ContentContext';
import { Context as AppContext } from '../context/AppContext';

import Title from '../components/Title';
import Loader from '../components/Loader';

interface YouTubeVideo {
  url: string;
  title: string;
}

function Videos() {
  const { t } = useTranslation('common');
  const {
    state: { showPlayer },
    turnPlayerOff,
  } = useContext(AppContext);
  const {
    state: { contentLoaded, youTubeVideoPrefix, youTubeVideos, youTubeVideosRandomised },
  } = useContext(ContentContext);
  const videos = youTubeVideosRandomised ? shuffle(youTubeVideos) : youTubeVideos;

  const [videoPlaying, changeVideoPlaying] = useState(-1);
  const loadStates: { [key: string]: boolean } = {};

  videos.forEach((_video: YouTubeVideo, idx: number) => {
    loadStates[`video_${idx}`] = false;
    return null;
  });

  const [videosLoaded, setLoaded] = useState(loadStates);

  return (
    <div className="videos margin-bottom-footer">
      <Title text={t('videos.title')} />
      {contentLoaded &&
        videos.map((video: YouTubeVideo, idx: number) => {
          const { title, url } = video;
          return (
            <div className="videos__video" key={title}>
              <h2 className="videos__video--title">{title}</h2>
              {!videosLoaded[`video_${idx}`] && (
                <Loader showSpinner withClasses={['loadingAnimation', 'margin-top-medium']} />
              )}
              <div className="videos__video--player">
                <ReactPlayer
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
