import React, { useState } from 'react';
import GridCell from '../GridCell/GridCell';
import Panel from '../Panel/Panel';
import Watch from '../Watch/Watch';
import classes from './PlayingField.module.css';

const PlayingField = (props) => {
  const [zero, setZero] = useState(true);
  const [cross, setCross] = useState(true);

  return (
    <div className={classes.playingField}>
      <Watch />
      <div className={classes.playingField__grid}>
        <GridCell />
        <GridCell />
        <GridCell cross={cross} />
        <GridCell zero={zero} />
        <GridCell zero={zero} />
        <GridCell />
        <GridCell />
        <GridCell cross={cross} />
        <GridCell />
      </div>
      <Panel />
    </div>
  )
}

export default PlayingField;
