import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Context as ContentContext } from '../context/ContentContext';

import { apiRoot } from '../api/adminApi';
import Title from '../components/Title';
import Button from '../components/Button';
import { convertDate, convertTime } from '../utils/utils';
import { Schedule } from '../types';

function LiveSchedule() {
  const { t } = useTranslation('common');
  const {
    state: { upcomingEvent, eventFlyerLocation, schedules },
  } = useContext(ContentContext);
  const [tabShown, changeTab] = useState('upComing');

  const eventDate = new Date(upcomingEvent);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const eventExpired = eventDate < yesterday;

  useEffect(() => {
    const defaultState = !eventExpired ? 'upComing' : 'all';
    changeTab(defaultState);
  }, [upcomingEvent]);

  const getUpComingContent = (event: string) => {
    if (!eventExpired) {
      return (
        <img src={`${apiRoot()}${eventFlyerLocation}`} alt="Up and coming event" className="schedule__up-coming" />
      );
    }
    return <h4 className="center-text schedule__no-up-coming">{t('schedule.noEvent')}</h4>;
  };

  const getTable = () => {
    if (schedules.length) {
      return (
        <table className="schedule__table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>DJ</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((event: Schedule, idx: number) => {
              const { dj, date, time } = event;
              return (
                <tr className={`schedule__table--row-${idx % 2 === 0 ? 'even' : 'odd'}`} key={`${dj}_${date}_${time}`}>
                  <td>{convertDate(date)}</td>
                  <td>{convertTime(time)}</td>
                  <td>{dj}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
    return <h4 className="center-text schedule__no-up-coming">{t('schedule.noSets')}</h4>;
  };

  return (
    <div className="schedule page-min-height">
      <Title text={t('schedule.title')} />
      <div className="schedule__buttons">
        <Button
          className={`schedule__buttons-up-coming ${tabShown === 'upComing' ? 'schedule__buttons-selected' : ''}`}
          onClick={() => changeTab('upComing')}
          text={t('schedule.buttonUpComing')}
        />
        <Button
          className={`schedule__buttons-all ${tabShown === 'all' ? 'schedule__buttons-selected' : ''}`}
          onClick={() => changeTab('all')}
          text={t('schedule.buttonAll')}
        />
      </div>
      {tabShown === 'upComing' && getUpComingContent(upcomingEvent)}
      {tabShown === 'all' && getTable()}
    </div>
  );
}

export default LiveSchedule;
