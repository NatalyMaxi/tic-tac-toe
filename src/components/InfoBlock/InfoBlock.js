import React from 'react';
import classes from './InfoBlock.module.css';
import Title from '../Title/Title';
import IconCrossOrToe from '../IconCrossOrToe/IconCrossOrToe';

const InfoBlock = () => {
   return (
      <div className={classes.infoBlock}>
         <Title title='Игроки' />
         <ul className={classes.infoBlock__container}>
            <li className={classes.infoBlock__items}>
               <IconCrossOrToe
                  smallIcon='true'
                  zero='zero'
               />
               <div className={classes.infoBlock__item}>
                  <p className={classes.infoBlock__name}>Пупкин Владлен Игоревич</p>
                  <p className={classes.infoBlock__text}>63% побед</p>
               </div>
            </li>
            <li className={classes.infoBlock__items}>
               <IconCrossOrToe
                  smallIcon='true'
                  cross='cross'
               />
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