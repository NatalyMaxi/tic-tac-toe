import React from 'react';
import classes from './Panel.module.css';
//import smallCross from '../../images/cross-small.png';
import smallZero from '../../images/zero-small.png';

const Panel = () => {
   return (
      <div className={classes.panel}>
         <p className={classes.panel__text}>Ходит</p>
         <img
            className={classes.panel__icon}
            src={smallZero}
            alt='Нолик'
         />
         {/* <img className={classes.panel__icon} src={smallCross} alt='Крестик' /> */}
         <p className={classes.panel__text}>Владлен Пупкин</p>
      </div>
   )
}

export default Panel;