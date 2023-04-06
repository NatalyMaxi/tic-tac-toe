import React from 'react';
import classes from './CrossOrZero.module.css';
import cross from '../../images/cross.png';
import zero from '../../images/zero.png';

const CrossOrZero = (props) => {
   return (
      <div className={classes.cross}>
         {
            props.cross ?
               (<img
                  className={classes.cross__item}
                  src={cross}
                  alt='Крестик' />)
               :
               props.zero ?
                  (<img
                     className={classes.cross__item}
                     src={zero}
                     alt='Нолик' />)
                  :
                  (null)
         }
      </div>
   )
}

export default CrossOrZero;