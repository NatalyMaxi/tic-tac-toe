import React from 'react';
import classes from './InfoBlock.module.css';
import smallCross from '../../images/cross-small.png';
import smallZero from '../../images/zero-small.png';

const InfoBlock = () => {
   return (
      <div className={classes.infoBlock}>
         <h1 className={classes.infoBlock__title}>Игроки</h1>
         <ul className={classes.infoBlock__container}>
            <li className={classes.infoBlock__items}>
               <img className={classes.infoBlock__icon} src={smallZero} alt='Нолик' />
               <div className={classes.infoBlock__item}>
                  <p className={classes.infoBlock__name}>Пупкин Владлен Игоревич</p>
                  <p className={classes.infoBlock__text}>63% побед</p>
               </div>
            </li>
            <li className={classes.infoBlock__items}>
               <img className={classes.infoBlock__icon} src={smallCross} alt='Крестик' />
               <div className={classes.infoBlock__item}>
                  <p className={classes.infoBlock__name}>Плюшкина Екатерина Викторовна</p>
                  <p className={classes.infoBlock__text}>23% побед</p>
               </div>
            </li>
         </ul>
      </div>
   )
}

export default InfoBlock;