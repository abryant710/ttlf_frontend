/* eslint-disable @typescript-eslint/camelcase */
import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

import { Context as ContentContext } from '../context/ContentContext';
import { Context as AppContext } from '../context/AppContext';

import { getImage } from '../utils/utils';
import Loader from './Loader';
import Button from './Button';

function Player() {
  const {
    state: { soundcloudTrackPrefix, soundcloudTracks, contentLoaded },
  } = useContext(ContentContext);
  const {
    state: { playerMinimised },
    toggleMinimisePlayer,
  } = useContext(AppContext);
  const { t } = useTranslation('common');
  const [chosenTrack, updateTrack] = useState(0);
  const [hasLoaded, hideLoadingSpinner] = useState(false);

  const changeTrack = (track: number, direction: string): number => {
    if (direction === 'fwd') {
      return track + 1 >= soundcloudTracks.length ? 0 : track + 1;
    }
    return track - 1 < 0 ? soundcloudTracks.length - 1 : track - 1;
  };

  return (
    <div className={`player ${playerMinimised ? 'hidden' : ''}`}>
      <div className="player__container">
        {contentLoaded && (
          <Loader
            withClasses={['bounceLeft', 'image-width-small']}
            imageUrl={getImage({ rand: true })}
            isOverlay={false}
            message={soundcloudTracks[chosenTrack].title}
          />
        )}
        {!hasLoaded && <Loader showSpinner withClasses={['loadingAnimation', 'margin-top-medium']} />}
        <div className={`player__controls ${!hasLoaded ? 'hidden height-zero' : ''}`}>
          <div className="player__skip player__skip-back">
            <FaChevronCircleLeft
              size="30px"
              color="black"
              onClick={() => updateTrack(changeTrack(chosenTrack, 'back'))}
            />
          </div>
          {contentLoaded && (
            <ReactPlayer
              url={`${soundcloudTrackPrefix}${soundcloudTracks[chosenTrack].url}`}
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
          )}
          <div className="player__skip player__skip-fwd">
            <FaChevronCircleRight
              size="30px"
              color="black"
              onClick={() => updateTrack(changeTrack(chosenTrack, 'fwd'))}
            />
          </div>
        </div>
        <Button className="player__close-button" onClick={toggleMinimisePlayer} text={t('player.hide')} />
      </div>
    </div>
  );
}

export default Player;
