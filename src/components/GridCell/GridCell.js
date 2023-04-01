import React from 'react';
import CrossOrZero from '../CrossOrZero/CrossOrZero';
import classes from './GridCell.module.css';

const GridCell = (props) => {
   return (
      <div className={classes.cell}>
         <CrossOrZero
            cross={props.cross}
            zero={props.zero}
         />
      </div>
   )
}

export default GridCell;