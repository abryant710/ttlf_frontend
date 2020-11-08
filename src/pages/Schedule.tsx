import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Title from '../components/Title';
import Button from '../components/Button';
import schedule from '../config/schedule';
import { convertDate, convertTime } from '../utils/utils';

function Schedule() {
  const { t } = useTranslation('common');

  const [tabShown, changeTab] = useState('upComing');

  return (
    <div className="schedule margin-bottom-footer">
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
      {tabShown === 'upComing' && (
        <img src="/images/flyers/event_2020_11_28.jpeg" alt="Up and coming event" className="schedule__up-coming" />
      )}
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
