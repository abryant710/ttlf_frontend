import React, {useContext, useState} from 'react';
import ReactPlayer from "react-player"

import { Context as AppContext } from '../context/AppContext';

import {urlPrefix, videos} from '../config/youTubeVideos';

function Videos() {
  const {
    state: {showPlayer},
    turnPlayerOff
  } = useContext(AppContext);
  const [videoPlaying, changeVideoPlaying] = useState(-1);
  return (
    <div className="videos margin-bottom-footer">
      {videos.map((video, idx) => {
        const {title, url} = video;
        return (
          <div className="videos__video" key={`ttlf_video_${idx}`}>
            <h2 className="videos__video--title">{title}</h2>
            <div className="videos__video--player">
              <ReactPlayer
                url={`${urlPrefix}${url}`}
                width="100%"
                height="100%"
                config={{
                  youtube: {
                    playerVars: { 
                      'showinfo': 1,
                      'controls': 1,
                    }
                  }
                }}
                onReady={() => {/* TODO: Hide / show a loading spinner for each */}}
                onPlay={() => {
                  turnPlayerOff();
                  changeVideoPlaying(idx);
                }}
                onPause={() => {}}
                playing={!showPlayer && videoPlaying === idx}
              />
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Videos;
