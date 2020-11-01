/* eslint-disable @typescript-eslint/camelcase */
import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

import { Context as AppContext } from '../context/AppContext';

import * as soundcloud from '../config/soundCloudTracks';
import { getImage } from '../utils/utils';
import Loader from './Loader';

function changeTrack(track: number, direction: string): number {
  const { tracks } = soundcloud;
  if (direction === 'fwd') {
    return track + 1 >= tracks.length ? 0 : track + 1;
  }
  return track - 1 < 0 ? tracks.length - 1 : track - 1;
}

function Player() {
  const {
    state: { playerMinimised },
    toggleMinimisePlayer,
  } = useContext(AppContext);
  const { t } = useTranslation('common');
  const { tracks, urlPrefix } = soundcloud;
  const [chosenTrack, updateTrack] = useState(0);
  const [hasLoaded, hideLoadingSpinner] = useState(false);
  return (
    <div className={`player ${playerMinimised ? 'hidden' : ''}`}>
      <div className="player__container">
        <Loader
          withClasses={['bounceLeft', 'image-width-small']}
          imageUrl={getImage({ rand: true })}
          isOverlay={false}
          message={tracks[chosenTrack].title}
        />
        {!hasLoaded && <Loader showSpinner withClasses={['loadingAnimation', 'margin-top-medium']} />}
        <div className={`player__controls ${!hasLoaded ? 'hidden height-zero' : ''}`}>
          <div className="player__skip player__skip-back">
            <FaChevronCircleLeft
              size="30px"
              color="black"
              onClick={() => updateTrack(changeTrack(chosenTrack, 'back'))}
            />
          </div>
          <ReactPlayer
            url={`${urlPrefix}${tracks[chosenTrack].url}`}
            width="70%"
            height="120px"
            config={{
              soundcloud: {
                options: {
                  hide_related: true,
                  show_comments: false,
                  show_user: true,
                  show_reposts: false,
                  show_teaser: false,
                  show_artwork: false,
                  visual: false,
                },
              },
            }}
            onReady={() => hideLoadingSpinner(true)}
            playing
          />
          <div className="player__skip player__skip-fwd">
            <FaChevronCircleRight
              size="30px"
              color="black"
              onClick={() => updateTrack(changeTrack(chosenTrack, 'fwd'))}
            />
          </div>
        </div>
        {/* TODO: make a reusable button component */}
        <p className="player__close-button" onClick={toggleMinimisePlayer}>
          {t('player.hide')}
        </p>
      </div>
    </div>
  );
}

export default Player;
