import React from 'react';
import classes from './Panel.module.css';
import IconCrossOrToe from '../IconCrossOrToe/IconCrossOrToe';

const Panel = () => {
   return (
      <div className={classes.panel}>
         <p className={classes.panel__text}>Ходит</p>
         <IconCrossOrToe
            smallIcon='true'
            zero='zero'
         />
         {/* <IconCrossOrToe
            smallIcon='true'
            cross='cross'
         /> */}
         <p className={classes.panel__text}>Владлен Пупкин</p>
      </div>
   )
}

export default Panel;