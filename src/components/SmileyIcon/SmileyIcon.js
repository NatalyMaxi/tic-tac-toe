import React from 'react';
import classes from './SmileyIcon.module.css';
import man from '../../images/man.png';
import lady from '../../images/lady.png';

const SmileyIcon = ({ gender, size }) => {
  return (
    <>
      {
        gender === 'lady' &&
        <img className={size === 'small' ? `${classes.smile} ${classes.smile_type_small}` : `${classes.smile}`}
          src={lady}
          alt='Смайлик лицо девушки'
        />
      }
      {
        gender === 'man' &&
        <img className={size === 'small' ? `${classes.smile} ${classes.smile_type_small}` : `${classes.smile}`}
          src={man}
          alt='Смайлик лицо мужчины'
        />
      }
    </>
  )
}

export default SmileyIcon;
