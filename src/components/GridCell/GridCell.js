import React from 'react';
import IconCrossOrToe from '../IconCrossOrToe/IconCrossOrToe';
import classes from './GridCell.module.css';

const GridCell = (props) => {
  return (
    <div className={classes.cell}>
      {
        props.zero && <IconCrossOrToe
          zero='zero'
        />
      }
      {
        props.cross && <IconCrossOrToe
          cross='cross'
        />
      }
    </div>
  )
}

export default GridCell;
