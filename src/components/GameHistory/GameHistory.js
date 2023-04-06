import React from 'react';
import classes from './GameHistory.module.css';
import littleCross from '../../images/cross-little.png';
import littleZero from '../../images/zero-little.png';
import cup from '../../images/cup.png';

const GameHistory = (props) => {
   return (
      <>
         <p className={classes.game__players}>
            <div className={classes.game__item}>
               <img
                  className={classes.game__icon}
                  src={littleZero}
                  alt='Иконка нолик'
               />
               <p className={classes.game__name}>{props.userNameZero}</p>
               {
                  props.isVictory.zero &&
                  <img
                     className={classes.game__cupIcon}
                     src={cup}
                     alt='Иконка кубок'
                  />
               }
            </div>
            <p className={classes.game__text}>против</p>
            <div className={classes.game__item}>
               <img
                  className={classes.game__icon}
                  src={littleCross}
                  alt='Иконка кубок'
               />
               <p className={classes.game__name}>{props.userNameCross}</p>
               {
                  props.isVictory.cross &&
                  <img className={classes.game__cupIcon}
                     src={cup}
                     alt='Иконка крестик'
                  />
               }
            </div>
         </p>
         <p className={classes.game__elem}>{props.gameDate}</p>
         <p className={classes.game__elem}>{props.gameTime}</p>
      </>
   )
}

export default GameHistory;