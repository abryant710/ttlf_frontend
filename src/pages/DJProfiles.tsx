import React, { useEffect, createRef, useContext } from 'react';
import { shuffle } from 'lodash';
import { useTranslation } from 'react-i18next';

import { Context as ContentContext } from '../context/ContentContext';

import Title from '../components/Title';
import Loader from '../components/Loader';
import Button from '../components/Button';
import { DjBio } from '../types';
import { getImage, numberUpToMax } from '../utils/utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const scrollToRef = (ref: any) => window.scrollTo({ top: ref.current.offsetTop - 100, behavior: 'smooth' });

function DJProfiles() {
  const { t } = useTranslation('common');
  const {
    state: { djProfiles },
  } = useContext(ContentContext);
  const residents = djProfiles.map((profile: DjBio) => [profile.name, profile.nickname]);
  const imgNums = shuffle(Array.from(Array(10).keys())).slice(0, residents.length);

  const arrLength = residents.length;
  const [djRefs, setElRefs] = React.useState([]);

  useEffect(() => {
    setElRefs((d) =>
      Array(arrLength)
        .fill(0)
        .map((_, i) => d[i] || createRef()),
    );
  }, [arrLength]);

  return (
    <div className="bios page-min-height">
      <Title text={t('djProfiles.title')} />
      <div className="bios__buttons">
        {residents.map((resident: string[], resIdx: number) => (
          <Button
            key={`${resident[0]}_button`}
            className="bios__buttons--button"
            onClick={() => scrollToRef(djRefs[resIdx])}
            text={resident[1] || resident[0]}
          />
        ))}
      </div>
      {residents.map((resident: string[], resIdx: number) => {
        const { bio } = djProfiles.find((profile: DjBio) => profile.name === resident[0]);
        return (
          <div className="bios__bio" key={resident[0]} ref={djRefs[resIdx]}>
            <h1 className="bios__bio--title">{resident[0]}</h1>
            {resident[1] && (
              <h4 className="bios__bio--nickname">
                A.K.A
                <span className="bios__bio--nickname-dark">{` ${resident[1]}`}</span>
              </h4>
            )}
            <Loader
              withClasses={['bounceLeft', 'image-width-small']}
              imageUrl={getImage({ num: imgNums[resIdx] })}
              isOverlay={false}
              message=""
            />
            {bio.map((para: string, paraIdx: number) => {
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
