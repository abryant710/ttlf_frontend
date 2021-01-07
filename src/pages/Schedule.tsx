import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { Context as ContentContext } from '../context/ContentContext';

import Title from '../components/Title';
import Button from '../components/Button';
import schedule from '../config/schedule';
import { convertDate, convertTime } from '../utils/utils';

function Schedule() {
  const { t } = useTranslation('common');
  const {
    state: { upcomingEvent },
  } = useContext(ContentContext);

  const defaultState = upcomingEvent ? 'upComing' : 'all';
  const [tabShown, changeTab] = useState(defaultState);

  const getUpComingContent = (event: string) => {
    if (event) {
      return (
        // TODO: use dynamic content here to add a flyer
        <img src="/images/flyers/event_2020_11_28.jpeg" alt="Up and coming event" className="schedule__up-coming" />
      );
    }
    return <h4 className="center-text schedule__no-up-coming">{t('schedule.noEvent')}</h4>;
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
      {tabShown === 'all' && (
        <table className="schedule__table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>DJ</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((event, idx) => {
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
      )}
    </div>
  );
}

export default Schedule;
