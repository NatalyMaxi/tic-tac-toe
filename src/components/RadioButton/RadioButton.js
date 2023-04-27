import React from 'react';
import classes from './RadioButton.module.css';
import SmileyIcon from '../SmileyIcon/SmileyIcon';

const RadioButton = () => {
  return (
    <div className={classes.radioButton}>
      <input
        className={classes.radioButton__input}
        type='radio'
        name='radio-group'
        id='lady' />
      <label className={classes.radioButton__label} htmlFor="lady">
        <SmileyIcon gender='lady' />
      </label>
      <input
        className={classes.radioButton__input}
        type='radio'
        id='man'
        name='radio-group'
      />
      <label className={classes.radioButton__label} htmlFor='man'>
        <SmileyIcon gender='man' />
      </label>
    </div>
  )
}

export default RadioButton;
