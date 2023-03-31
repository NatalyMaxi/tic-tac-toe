import React from 'react';
import classes from './ExitButton.module.css';
import exitButton from '../../images/icon-button.png';

const ExitButton = () => {
   return (
      <button className={classes.exitButton}>
         <img
            src={exitButton}
            alt='Выход'
         />
      </button>
   )
}

export default ExitButton;