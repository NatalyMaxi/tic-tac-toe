import React from 'react';
import classes from './Checkbox.module.css';

const Checkbox = () => {
   return (
      <div className={classes.checkbox}>
         <label className={classes.checkbox__label}>Только свободные</label>
         <input
            className={classes.checkbox__input}
            name='checkbox'
            id='checkbox'
            type='checkbox'
         // checked={checked}
         //onChange={onCheckbox}
         />
      </div>
   );
}

export default Checkbox;