import React, { useRef, useEffect, createRef } from 'react';
import { shuffle } from 'lodash';

import Loader from '../components/Loader';
import Button from '../components/Button';
import djProfiles, { residents } from '../config/djProfiles';
import { getImage, numberUpToMax } from '../utils/utils';

const scrollToRef = (ref: any) => window.scrollTo({ top: ref.current.offsetTop - 100, behavior: 'smooth' });

function DJProfiles() {
  const profiles: { [key: string]: { nickname: string; content: Array<string> } } = djProfiles;
  const imgNums = shuffle(Array.from(Array(10).keys())).slice(0, residents.length);

  const arrLength = residents.length;
  const [djRefs, setElRefs] = React.useState([]);

  useEffect(() => {
    setElRefs(() =>
      Array(arrLength)
        .fill(0)
        .map((_, i) => djRefs[i] || createRef()),
    );
  }, [arrLength]);

  return (
    <div className="bios margin-bottom-footer">
      <div className="bios__buttons">
        {residents.map((resident, resIdx) => (
          <Button className="bios__buttons--button" onClick={() => scrollToRef(djRefs[resIdx])} text={resident} />
        ))}
      </div>
      {residents.map((resident, resIdx) => {
        const { nickname, content } = profiles[resident];
        return (
          <div className="bios__bio" key={resident} ref={djRefs[resIdx]}>
            <h1 className="bios__bio--title">{resident}</h1>
            {nickname && (
              <h4 className="bios__bio--nickname">
                A.K.A
                <span className="bios__bio--nickname-dark">{` ${nickname}`}</span>
              </h4>
            )}
            <Loader
              withClasses={['bounceLeft', 'image-width-small']}
              imageUrl={getImage({ num: imgNums[resIdx] })}
              isOverlay={false}
              message=""
            />
            {content.map((para, paraIdx) => {
              return (
                <p
                  className={`bios__bio--paragraph bios__bio--paragraph-${numberUpToMax(paraIdx + 1, 4)}`}
                  key={`${para}`}
                >
                  {para}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default DJProfiles;
