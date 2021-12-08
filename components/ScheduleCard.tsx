import React from 'react';
import style from '../styles/schedule.module.scss';

type CardProps = {
  title: string;
  address: string;
  subCards: Array<SubCard>;
};

type SubCard = {
  title: string;
  desc: string;
};

const ScheduleCard = ({ title, address, subCards }: CardProps) => {
  return (
    <div className={style.scheduleSubCard}>
      <h1>{title}</h1>
      <h5>{address}</h5>
      <hr />
      {subCards &&
        subCards.map((x, k) => (
          <React.Fragment key={k}>
            <h3>{x.title}</h3>
            <p>{x.desc}</p>
          </React.Fragment>
        ))}
    </div>
  );
};

export default ScheduleCard;
