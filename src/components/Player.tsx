import React, {useState, useContext} from 'react';
import {useTranslation} from "react-i18next";
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa';
import {random} from 'lodash';

import { Context as AppContext } from '../context/AppContext';

import * as soundcloud from '../config/soundCloudTracks';
import Loader from '../components/Loader';

const changeTrack = function (track: number, direction: string): number {
  const {tracks} = soundcloud;
  if (direction === "fwd") {
    return track + 1 >= tracks.length ? 0 : track + 1;
  }
  return track - 1 < 0 ? tracks.length - 1 : track - 1;
};

const getRandomImage = function ():string {
  const newNum = random(1, 12);
  return `${newNum < 10 ? '0' : ""}${newNum}`;
};

function Player() {
  const { 
    state: {playerMinimised},
    minimisePlayer
  } = useContext(AppContext);
  const {t} = useTranslation('common');
  const {tracks, urlParts} = soundcloud;
  const [urlStart, urlEnd] = urlParts;
  const [chosenTrack, updateTrack] = useState(0);
  const [isLoading, hasLoaded] = useState(true);
  return (
    <div className={`player ${playerMinimised ? "hidden" : ""}`}>
      <div className="player__container">
        <Loader
          withClasses={["bounceLeft", "image-width-small"]}
          imageUrl={`images/transparent/ttlf_00${getRandomImage()}.png`}
          isOverlay={false}
          message={tracks[chosenTrack].title}
        />
        {isLoading && (
          <Loader
            showSpinner={true}
            withClasses={["loadingAnimation", "margin-top-medium"]}
          />
        )}
        <div className={`player__controls ${isLoading ? "hidden height-zero" : ""}`}>
          <div className="player__skip player__skip-back">
            <FaChevronCircleLeft
              size="30px"
              color="black"
              onClick={() => updateTrack(changeTrack(chosenTrack, "back"))}
            />
          </div>
          <iframe
            id="playerFrame"
            title="ttlfPlayer"
            width="70%"
            height="120px"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            onLoad={() => hasLoaded(false)}
            src={`${urlStart}${tracks[chosenTrack].url}${urlEnd}`}
          >
          </iframe>
          <div className="player__skip player__skip-fwd">
            <FaChevronCircleRight
              size="30px"
              color="black"
              onClick={() => updateTrack(changeTrack(chosenTrack, "fwd"))}
            />
          </div>
        </div>
        <p
          className="player__close-button"
          onClick={minimisePlayer}
        >{t('player.hide')}</p>
      </div>
    </div>
  );
}

export default Player;
