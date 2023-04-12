import React from 'react';
import IconCrossOrToe from '../IconCrossOrToe/IconCrossOrToe';
import classes from './GameHistory.module.css';
import cup from '../../images/cup.png';

const GameHistory = (props) => {
   return (
      <>
         <div className={classes.game__players}>
            <div className={classes.game__item}>
               <IconCrossOrToe
                  littleIcon='true'
                  zero='zero'
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
            <div className={classes.game__text}>против</div>
            <div className={classes.game__item}>
               <IconCrossOrToe
                  littleIcon='true'
                  cross='cross'
               />
               <p className={classes.game__name}>{props.userNameCross}</p>
               {
                  props.isVictory.cross &&
                  <img className={classes.game__cupIcon}
                     src={cup}
                     alt='Иконка кубок'
                  />
               }
            </div>
         </div>
         <p className={classes.game__elem}>{props.gameDate}</p>
         <p className={classes.game__elem}>{props.gameTime}</p>
      </>
   )
}

export default GameHistory;