import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa';

import * as soundcloud from '../config/soundCloudTracks';

const changeTrack = function (track: number, direction: string): number {
  const {tracks} = soundcloud;
  if (direction === "fwd") {
    return track + 1 >= tracks.length ? 0 : track + 1;
  }
  return track - 1 < 0 ? tracks.length - 1 : track - 1;
};

function Player() {
  const {t} = useTranslation('common');
  const {tracks, urlParts} = soundcloud;
  const [urlStart, urlEnd] = urlParts;
  const [chosenTrack, updateTrack] = useState(0);
  return (
    <div className="player">
      <div className="player__container">
        <div className="player__skip player__skip-back">
          <FaChevronCircleLeft
            size="30px"
            color="black"
            onClick={() => updateTrack(changeTrack(chosenTrack, "back"))}
          />
        </div>
        <iframe title="ttlf_player" width="60%" height="120px" scrolling="no" frameBorder="no" src={
          `${urlStart}${tracks[chosenTrack].number}${urlEnd}`
        }>
        </iframe>
        <div className="player__skip player__skip-fwd">
          <FaChevronCircleRight
            size="30px"
            color="black"
            onClick={() => updateTrack(changeTrack(chosenTrack, "fwd"))}
          />
        </div>
      </div>
    </div>
  );
}

export default Player;
