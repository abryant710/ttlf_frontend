import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa';

import * as soundcloud from '../config/soundCloudTracks';
import Loader from '../components/Loader';

const changeTrack = function (track: number, direction: string): number {
  const {tracks} = soundcloud;
  if (direction === "fwd") {
    return track + 1 >= tracks.length ? 0 : track + 1;
  }
  return track - 1 < 0 ? tracks.length - 1 : track - 1;
};

// TODO: move to utils file
const getRandomImage = function ():string {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const newNum = items[Math.floor(Math.random() * items.length)]
  return `${newNum < 10 ? '0' : ""}${newNum}`;
};

function Player() {
  const {t} = useTranslation('common');
  const {tracks, urlParts} = soundcloud;
  const [urlStart, urlEnd] = urlParts;
  const [chosenTrack, updateTrack] = useState(0);

  return (
    <div className="player">
      <div className="player__container">
        <Loader
          withClasses={["bounceLeft", "image-width-small"]}
          imageUrl={`images/solid/ttlf_00${getRandomImage()}.jpg`}
          isOverlay={false}
          message={tracks[chosenTrack].title}
        />
        <div className="player__controls">
          <div className="player__skip player__skip-back">
            <FaChevronCircleLeft
              size="30px"
              color="black"
              onClick={() => updateTrack(changeTrack(chosenTrack, "back"))}
            />
          </div>
          <iframe
            id="playerFrame"
            title="ttlf_player"
            width="60%"
            height="120px"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={`${urlStart}${tracks[chosenTrack].number}${urlEnd}`}
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
        <p className="player__close-button">{t('player.hide')}</p>
      </div>
    </div>
  );
}

export default Player;
