import React from 'react';
import { useTranslation } from 'react-i18next';

import Title from '../components/Title';
import schedule from '../config/schedule';
import { convertDate, convertTime } from '../utils/utils';

function Schedule() {
  const { t } = useTranslation('common');
  return (
    <div className="schedule margin-bottom-footer">
      <Title text={t('schedule.title')} />
      <table className="schedule__table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>DJ</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((event) => {
            const { dj, date, time } = event;
            return (
              <tr key={`${dj}_${date}_${time}`}>
                <td>{convertDate(date)}</td>
                <td>{convertTime(time)}</td>
                <td>{dj}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;
